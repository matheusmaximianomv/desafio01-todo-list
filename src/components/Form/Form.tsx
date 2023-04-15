import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { ITask, TSetStateActionTasks } from '../../models/Task';

import styles from './Form.module.css';

interface IFormProps {
  tasks: ITask[];
  setTasks: TSetStateActionTasks;
}

export function Form({ tasks, setTasks }: IFormProps) {
  const [text, setText] = useState<string>('');

  function buildNewTask(): ITask {
    return {
      id: uuidv4(),
      title: text,
      isCompleted: false,
    };
  }

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    if (!!text.trim().length) {
      const newTask = buildNewTask();
      
      setTasks([...tasks, newTask]);
      setText('');
    }
  }

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={event => setText(event.target.value)}
        required
      />

      <button type="submit">
        Criar

        <PlusCircle size={32} /> 
      </button>
    </form>
  );
}