import css from './ToggleMessage.module.css';

interface ToggleMessageProps {
  isOpen: boolean;
}

export default function ToggleMessage({ isOpen }: ToggleMessageProps) {
  return (
    <div className={`${css.message} ${isOpen ? css.visible : ''}`}>
      <span className={css.icon}>🎉</span>
      <span>Surprise! You toggled me.</span>
    </div>
  );
}
