import clsx from 'clsx';
import css from './Independent.states.module.css';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

export default function ISButton({ text, onClick, variant }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(css.button, variant && css[variant])}
      type="button"
    >
      {text}
    </button>
  );
}
