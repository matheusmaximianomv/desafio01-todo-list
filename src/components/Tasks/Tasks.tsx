import { ITask, TSetStateActionTasks } from '../../models/Task';

import { InfoTag } from './InfoTag/InfoTag';
import { RowTask } from './RowTask/RowTask';
import { Empty } from './Empty/Empty';

import styles from './Tasks.module.css';

interface ITasksProps {
  tasks: ITask[];
  setTasks: TSetStateActionTasks;
}

export function Tasks({ tasks, setTasks }: ITasksProps) {
  function buildTasksInScreen(): JSX.Element {
    return (
      <article className={styles.tasks_list}>
        {tasks.map((taskTarget) => 
          <RowTask
            key={taskTarget.id}
            currentTask={taskTarget}
            tasks={tasks}
            setTasks={setTasks}
          />
        )}
      </article>
    );
  }

  function switchBetweenComponents(): JSX.Element {
    const hasTasksCreated = tasks.length > 0; 

    return hasTasksCreated ? buildTasksInScreen() : <Empty />;
  }

  function generateQuantityTaskCreated(): string {
    return String(tasks.length);
  }

  function generateQuantityTaskFinished(): string {
    const tasksFinished = tasks.filter(({ isCompleted }) => isCompleted) || [];
    const totalTasks = generateQuantityTaskCreated();

    return `${tasksFinished.length} de ${totalTasks}`
  }

  return (
    <section className={styles.container_tasks}>
      <article className={styles.tasks_info}>
        <InfoTag name="Tarefas criadas" color="#4ea8de" value={generateQuantityTaskCreated()}/>
        <InfoTag name="Concluídas" color="#8284fa" value={generateQuantityTaskFinished()} />
      </article>

      {switchBetweenComponents()}
    </section>
  );
}