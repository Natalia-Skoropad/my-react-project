import { UpdatingObjects } from './index';
import css from './Updating.objects.module.css';

export default function UpdatingObjectsApp() {
  return (
    <>
      <h3 className={css.title}>Updating objects demo</h3>
      <UpdatingObjects />
    </>
  );
}
