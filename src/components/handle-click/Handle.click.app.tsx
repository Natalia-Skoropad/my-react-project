import { HandleClick } from './Handle.click';
import css from './Handle.click.module.css';

export default function HandleClickApp() {
  return (
    <div>
      <h3 className={css.h3}>HandleClick demo</h3>
      <HandleClick />
    </div>
  );
}
