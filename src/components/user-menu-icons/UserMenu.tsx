import { HiUser } from 'react-icons/hi';
import css from './UserMenu.module.css';

interface UserMenuProps {
  name: string;
}

export default function UserMenu({ name }: UserMenuProps) {
  return (
    <div className={css.container}>
      <HiUser className={css.icon} size={24} />
      <span>{name}</span>
    </div>
  );
}
