import css from './Click.counting.module.css';
import { useState } from 'react';

export interface ClickCountingProps {
  initial?: number;
}

export function ClickCounting({ initial = 0 }: ClickCountingProps) {
  const [clicks, setClicks] = useState(initial);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button className={css.button} onClick={handleClick}>
      Clicked: {clicks}
    </button>
  );
}
