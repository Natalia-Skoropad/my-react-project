import css from './Counter.module.css';

interface CounterProps {
  value: number;
  onIncrement: () => void;
}

export default function Counter({ value, onIncrement }: CounterProps) {
  return (
    <button className={css.button} onClick={onIncrement}>
      Clicked: {value}
    </button>
  );
}
