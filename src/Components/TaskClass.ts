import { TaskInterface } from "../Context/DataBaseContext.model";

export interface CreateTaskInterface extends Omit<TaskInterface, "id">{}

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

    static UpdateTask(props: { id: number, newTitle: string, board: TaskInterface[] }){
      const index = props.board.findIndex(e => e.id === props.id);
      const preUpdate = props.board[index];
      props.board[index] = {
        ...preUpdate, 
        title: props.newTitle
      }
    }

    static DeleteTask(props: { id: number, board: TaskInterface[] }){
      const filterArr = props.board.filter(e => e.id !== props.id);
      return filterArr;
    }

    static CompleteTask(props: { id: number, newState: boolean, board: TaskInterface[] }){
      const index = props.board.findIndex(e => e.id === props.id);
      const preUpdate = props.board[index];
      props.board[index] = {
        ...preUpdate,
        state: props.newState
      }
    }
  }