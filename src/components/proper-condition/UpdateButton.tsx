import css from './ProperCondition.module.css';

type Variant = 'x' | 'y';

interface UpdateButtonProps {
  variant: Variant;
  onClick: () => void;
  children: React.ReactNode;
}

export default function UpdateButton({
  variant,
  onClick,
  children,
}: UpdateButtonProps) {
  const className = variant === 'y' ? css.secondary : css.button;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
