import { TFunction } from 'i18next';

const getDiffDays = (date: Date) =>
  Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

export const getFormattedTime = (date: Date) =>
  `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

export const getFormattedDate = (date: Date, t: TFunction) => {
  const diffDays = getDiffDays(date);
  const dayPlural = diffDays === 1 ? 'Дня' : `${diffDays} Дней`;

  return `${dayPlural} ${t('date.ago')}, ${getFormattedTime(date)}`;
};

export const isToday = (date: Date) => getDiffDays(date) === 0;
export const isYesterday = (date: Date) => getDiffDays(date) === 1;
