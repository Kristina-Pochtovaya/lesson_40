import styles from './App.module.scss';
import { Alert, alerts } from './components/alert/alert';
import { Input } from './components/input/input';
import { useState } from 'react';

function App() {
  const [defaultInput, setDefaultInput] = useState('');
  const [disabledInput, setDisabledInput] = useState('');
  const [alertInput, setAlertInput] = useState('');
  const [alertTypeAlert, setAlertTypeAlert] = useState('Lorem ipsum');

  return (
    <div className={styles.app}>
      <div className={styles.contanier}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Inputs</h3>
          <Input value={defaultInput} onChange={setDefaultInput} />
          <Input
            value={disabledInput}
            onChange={setDisabledInput}
            disabled={true}
          />
          <Input
            value={alertInput}
            onChange={setAlertInput}
            alert={true}
            errorMessage="Alert!"
          />
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Alerts</h3>
          <Alert
            value={alertTypeAlert}
            onChange={setAlertTypeAlert}
            type={alerts.alert}
          />
          <Alert
            value={alertTypeAlert}
            onChange={setAlertTypeAlert}
            type={alerts.prohibited}
          />
          <Alert
            value={alertTypeAlert}
            onChange={setAlertTypeAlert}
            type={alerts.approved}
          />
          <Alert
            value={alertTypeAlert}
            onChange={setAlertTypeAlert}
            type={alerts.info}
          />
          <Alert
            value={alertTypeAlert}
            onChange={setAlertTypeAlert}
            type={alerts.notification}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
