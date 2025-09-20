import type { MouseEvent } from 'react';
import css from './Handle.click.module.css';

export interface HandleClickProps {
  onFirst?: (event: MouseEvent<HTMLButtonElement>) => void;
  onSecond?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function HandleClick({ onFirst, onSecond }: HandleClickProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('First button clicked:', event);
    onFirst?.(event);
  };

  return (
    <>
      <button className={css.button} onClick={handleClick}>
        First button
      </button>
      <button
        className={css.button}
        onClick={event => {
          console.log('Second button clicked:', event);
          onSecond?.(event);
        }}
      >
        Second button
      </button>
    </>
  );
}
