import globalStyles from '../../../styles/global.module.css';
import styles from './InfoTag.module.css';

interface IInfoTagProps {
  name: string;
  color: string;
  value: string;
}

export function InfoTag({ name, value, color }: IInfoTagProps) {
  return (
    <div className={styles.infoTag_container}>
      <strong
        className={globalStyles.no_select}
        style={{color}}
      >
        {name}
      </strong>
      <span className={globalStyles.no_select}>{value}</span>
    </div>
  );
}