import { useState } from 'react';
import ISButton from './Independent.states';
import css from './Independent.states.module.css';

export default function IndependentStatesApp() {
  const [count, setCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h3 className={css.h3}>Independent states demo</h3>

      <ISButton
        text={`Clicked: ${count}`}
        onClick={handleClick}
        variant="primary"
      />

      <ISButton
        text={isOpen ? 'Hide message' : 'Show message'}
        onClick={toggleMessage}
        variant="secondary"
      />

      {isOpen && <p className={css.message}>🎉 Surprise! You toggled me.</p>}
    </>
  );
}
