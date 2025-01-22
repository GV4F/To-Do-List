export interface TaskInterface {
  id: number;
  state: boolean;
  title: string;
  date: Date;
  priority: string;
  description?: string;
}