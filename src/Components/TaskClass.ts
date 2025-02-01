import { TaskInterface } from "../Context/DataBaseContext.model";

export interface CreateTaskInterface extends Omit<TaskInterface, "id">{}

export type ValueToChange = "Title" | "Date" | "State";
export type NewValue = string | Date | boolean;

export class TaskClass {


    static CreateTask({
      title, state, date, priority, description
    }: CreateTaskInterface) {

      const id = Math.floor(Math.random() * 1000);
      const newTask: TaskInterface = {
        id: id,
        title: title,
        state: state,
        date: date,
        priority: priority,
        description: description
      };

      return newTask;
    }

    static UpdateTask(props: { id: number, valueToChange: ValueToChange , newValue: NewValue, board: TaskInterface[] }){
      const updateBoard = props.board.map((e)=>{
        if(e.id === props.id){
          if(props.valueToChange === "Title" && typeof props.newValue === "string" ){
            e.title = props.newValue;
          }
          if(props.valueToChange === "Date" && typeof props.newValue === "object" ){
            e.date = props.newValue;
          }
          if(props.valueToChange === "State" && typeof props.newValue === "boolean" ){
            e.state = props.newValue;
          }
        }

        return e;
      })
      return updateBoard;
    }

    static DeleteTask(props: { id: number, board: TaskInterface[] }){
      const filterArr = props.board.filter(e => e.id !== props.id);
      return filterArr;
    }

    static CompleteTask(props: { id: number, newState: boolean, board: TaskInterface[] }){
      const updateBoard = props.board.map((element)=>{
        if(element.id === props.id){ element.state = props.newState; }
        return element;
      });
      return updateBoard;
    }
  }