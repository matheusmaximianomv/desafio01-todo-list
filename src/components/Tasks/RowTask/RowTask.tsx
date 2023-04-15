import { useState } from 'react';
import { Trash } from 'phosphor-react';

import { ITask, TSetStateActionTasks } from '../../../models/Task';

import { Checkbox } from '../Checkbox/Checkbox';

import styles from './RowTask.module.css';

interface IRowTaskProps {
  currentTask: ITask;
  tasks: ITask[];
  setTasks: TSetStateActionTasks;
}

export function RowTask({ currentTask, tasks, setTasks }: IRowTaskProps) {
  const [hoverButtonDelete, setHoverButtonDelete] = useState<boolean>(false);

  function buildClassToParagraph(): string {
    return currentTask.isCompleted ? styles.text_marked : '';
  }

  function colorIconButtonDelete(): string {
    return hoverButtonDelete ? '#e25858' : '#808080';
  }

  function handleChangeStatusTask(): void {
    const tasksUpdated = tasks.map(task => {
      const isCompleted = task.id === currentTask.id ? !task.isCompleted : task.isCompleted

      return {
        ...task,
        isCompleted,
      };
    });

    setTasks(tasksUpdated);
  }

  function handleDeleteTask(): void {
    const tasksUpdated = tasks.filter(task => task.id !== currentTask.id);
    setTasks(tasksUpdated);
  }

  function onToggleFocus(): void {
    setHoverButtonDelete(!hoverButtonDelete);
  }

  return (
    <div className={styles.rowTask_container}>
      <Checkbox value={currentTask.isCompleted} onClick={handleChangeStatusTask} />

      <p className={buildClassToParagraph()}>{currentTask.title}</p>

      <button
        className={styles.rowTask_button}
        onClick={handleDeleteTask}
        onMouseEnter={onToggleFocus}
        onMouseLeave={onToggleFocus}
        onFocus={onToggleFocus}
        onBlur={onToggleFocus}
      >
        <Trash size={18} color={colorIconButtonDelete()} />
      </button>
    </div>
  );
}