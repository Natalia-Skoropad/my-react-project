import { useState } from 'react';
import { ClickCounter } from './Click.counter';
import css from './Click.counter.module.css';

export default function ClickCounterApp() {
  const [clicks, setClicks] = useState<number>(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <h3 className={css.h3}>Click counter demo 2</h3>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
}
