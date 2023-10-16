import { useTranslation } from 'react-i18next';
import { getFormattedDate, isYesterday, isToday, getFormattedTime } from './formatted-date.utils';

type Props = {
  date: Date;
  className?: string;
};

export const FormattedDate = ({ date, className }: Props) => {
  const { t } = useTranslation();

  if (isToday(date)) {
    return (
      <span className={className}>
        {t('date.today')}, {getFormattedTime(date)}
      </span>
    );
  }

  if (isYesterday(date)) {
    return (
      <span className={className}>
        {t('date.yesterday')}, {getFormattedTime(date)}
      </span>
    );
  }

  return <span className={className}>{getFormattedDate(date, t)}</span>;
};
