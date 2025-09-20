import { ClickCounting } from './Click.counting';
import css from './Click.counting.module.css';

export default function ClickCountingApp() {
  return (
    <>
      <h3 className={css.h3}>Click counter demo</h3>
      <ClickCounting initial={0} />
      <ClickCounting initial={0} />
      <ClickCounting initial={0} />
    </>
  );
}
