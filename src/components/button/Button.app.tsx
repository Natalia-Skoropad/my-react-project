import Button from './Button';
import css from './Button.module.css';

export default function ButtonApp() {
  return (
    <>
      <h3 className={css.h3}>Button demo</h3>
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
    </>
  );
}
