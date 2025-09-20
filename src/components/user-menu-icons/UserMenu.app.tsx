import UserMenu from './UserMenu';
import css from './UserMenu.module.css';

export default function UserMenuApp() {
  return (
    <>
      <h3 className={css.h3}>Icon demo</h3>
      <UserMenu name="Hello" />
    </>
  );
}
