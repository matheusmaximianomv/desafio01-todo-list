import { useState } from 'react';

import { ITask } from './models/Task';

import { Background } from './components/Background/Background';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Tasks } from './components/Tasks/Tasks'

import styles from './app.module.css';

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <Background />
      <main className={styles.container}>
        <Header />
        <Form tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  );
}
