import { useState, useEffect } from 'react';
import { Check } from 'phosphor-react';

import styles from './Checkbox.module.css';

interface ICheckboxProps {
  value?: boolean;
  onClick?: () => void;
}

export function Checkbox({ value = false, onClick }: ICheckboxProps) {
  const [data, setData] = useState<boolean>(false);

  useEffect(() => setData(value), [value]);

  function handleClick(): void {
    setData(!data);

    if (onClick) {
      onClick();
    }
  }

  function generateClassName(): string {
    const classes = [styles.checkbox_container];

    if (data) {
      classes.push(styles.checkbox_container_selected);
    }

    return classes.join(' ');
  }

  return (
    <button className={generateClassName()} onClick={handleClick}>
      { data && <Check size={13} color="#ffffff" /> }
    </button>
  );
}