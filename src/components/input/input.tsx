import clsx from 'clsx';
import styles from './input.module.scss';

const PLACEHOLDER = 'Placeholder';

export interface InputInterface {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  alert?: boolean;
  errorMessage?: string;
}

export function Input({
  value,
  onChange,
  disabled = false,
  alert = false,
  errorMessage = '',
}: InputInterface) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={clsx(
          styles.input,
          disabled && styles.input__disabled,
          alert && styles.input__alert
        )}
        placeholder={PLACEHOLDER}
      />
      <div
        className={clsx(
          styles.errorWrapper,
          alert && styles.errorWrapper__enabled
        )}
      >
        <p className={styles.error}>{errorMessage}</p>
      </div>
    </div>
  );
}
