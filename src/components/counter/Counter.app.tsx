import { useState } from 'react';
import Counter from './Counter';
import ToggleMessage from '../toggle-message';
import css from './Counter.app.module.css';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h3 className={css.h3}>Proper condition demo</h3>
      <div className={css.wrapper}>
        <div className={css.buttons}>
          <Counter value={count} onIncrement={handleClick} />
          <button className={css.secondary} onClick={toggleMessage}>
            {isOpen ? 'Hide message' : 'Show message'}
          </button>
        </div>

        {/* RIGHT HAND message, location always saved */}
        <ToggleMessage isOpen={isOpen} />
      </div>
    </>
  );
}
