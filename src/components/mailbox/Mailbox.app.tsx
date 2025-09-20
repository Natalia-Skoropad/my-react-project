import Mailbox from './Mailbox';
import css from './Mailbox.module.css';

export default function MailboxApp() {
  return (
    <>
      <h3 className={css.h3}>Your Mailbox</h3>
      <Mailbox username="Mango" messages={['Hello', 'Hello word']} />
    </>
  );
}
