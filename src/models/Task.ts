export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type TSetStateActionTasks = React.Dispatch<React.SetStateAction<ITask[]>>;