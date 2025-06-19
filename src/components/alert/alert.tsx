import clsx from 'clsx';
import { Input, InputInterface } from '../input/input';
import styles from './alert.module.scss';
import { AlertIcon } from '../../icons/alert_icon';
import { CloseIcon } from '../../icons/close_icon';
import { ProhibitedIcon } from '../../icons/prohibited_icon';
import { ApprovedIcon } from '../../icons/approved_icon';
import { InfoIcon } from '../../icons/info_icon';
import { NotificationIcon } from '../../icons/notification_icon';

export const alerts = {
  alert: 'alert',
  prohibited: 'prohibited',
  approved: 'approved',
  info: 'info',
  notification: 'notification',
} as const;

export interface AlertInterface extends InputInterface {
  type: keyof typeof alerts;
}

function mapIconByType(type: keyof typeof alerts) {
  switch (type) {
    case alerts.alert:
      return <AlertIcon className={styles.icon} />;
    case alerts.prohibited:
      return (
        <ProhibitedIcon
          className={clsx(styles.icon, styles[`icon__${type}`])}
        />
      );
    case alerts.approved:
      return (
        <ApprovedIcon className={clsx(styles.icon, styles[`icon__${type}`])} />
      );
    case alerts.info:
      return (
        <InfoIcon className={clsx(styles.icon, styles[`icon__${type}`])} />
      );
    default:
      return (
        <NotificationIcon
          className={clsx(styles.icon, styles[`icon__${type}`])}
        />
      );
  }
}

export function Alert({ type, value, onChange }: AlertInterface) {
  return (
    <div className={styles.alert}>
      <Input
        value={value}
        onChange={onChange}
        classNames={{ input: clsx(styles.input, styles[`input__${type}`]) }}
      />
      {mapIconByType(type)}
      <CloseIcon
        className={clsx(styles.closeIcon, styles[`closeIcon__${type}`])}
      />
    </div>
  );
}
