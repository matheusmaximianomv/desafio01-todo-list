import logoApp from '../../assets/logo.svg';

import globalStyles from '../../styles/global.module.css';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header_container}>
      <img
        className={globalStyles.no_select}
        src={logoApp}
        alt="Logo app"
        draggable={false}
      />
    </header>
  );
}