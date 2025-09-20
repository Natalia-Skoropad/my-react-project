import { useState } from 'react';
import clsx from 'clsx';
import css from './Updating.objects.module.css';

interface Values {
  x: number;
  y: number;
}

export default function UpdatingObjects() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: keyof Values): void => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <>
      <p className={css.text}>
        x: {values.x}, y: {values.y}
      </p>

      <div className={css.buttons}>
        <UIButton
          text="Update x"
          variant="primary"
          onClick={() => updateValue('x')}
        />
        <UIButton
          text="Update y"
          variant="secondary"
          onClick={() => updateValue('y')}
        />
      </div>
    </>
  );
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

function UIButton({ text, onClick, variant }: ButtonProps) {
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
