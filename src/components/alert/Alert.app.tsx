import Alert from './Alert';
import css from './Alert.module.css';

export default function AlertApp() {
  return (
    <>
      <h3 className={css.h3}>Alert demo</h3>
      <Alert message="Would you like to browse our recommended products?" />
      <Alert
        type="success"
        message="Payment received, thank you for your purchase"
      />
      <Alert
        type="error"
        message="Payment received, thank you for your purchase"
      />
    </>
  );
}
