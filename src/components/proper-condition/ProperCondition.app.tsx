import { useState } from 'react';
import css from './ProperCondition.module.css';
import UpdateButton from './UpdateButton';

interface Values {
  x: number;
  y: number;
}

export default function ProperConditionApp() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateValue = (key: keyof Values) => {
    setValues(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  return (
    <section>
      <h3 className={css.h3}>Updating objects demo</h3>

      <p className={css.values}>
        x: {values.x}, y: {values.y}
      </p>

      <div className={css.buttons}>
        <UpdateButton variant="x" onClick={() => updateValue('x')}>
          Update x
        </UpdateButton>

        <UpdateButton variant="y" onClick={() => updateValue('y')}>
          Update y
        </UpdateButton>
      </div>
    </section>
  );
}
