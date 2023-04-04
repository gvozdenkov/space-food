import { IntlProvider } from 'react-intl';
import { messages } from '../messages';

export const IntelApp = ({ children }) => {
  const locale = navigator?.language;
  const lang = locale.split('-')?.[0] ?? 'ru';
  const intlMessages = messages[lang] ?? messages.ru;

  return (
    <IntlProvider messages={intlMessages} locale={locale}>
      {children}
    </IntlProvider>
  );
};
