import styles from './App.module.scss';
import { Input } from './components/input/input';
import { useState } from 'react';

function App() {
  const [defaultInput, setDefaultInput] = useState('');
  const [disabledInput, setDisabledInput] = useState('');
  const [alertInput, setAlertInput] = useState('');

  return (
    <div className={styles.app}>
      <div className={styles.contanier}>
        <div className={styles.inputWrapper}>
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
      </div>
    </div>
  );
}

export default App;
