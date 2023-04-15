import emptyIcon from '../../../assets/clipboard.svg'

import globalStyles from '../../../styles/global.module.css';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <article className={styles.empty_container}>
      <img
        className={globalStyles.no_select}
        src={emptyIcon}
        alt="Vazio"
        draggable={false}
      />

      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </article>
  );
}