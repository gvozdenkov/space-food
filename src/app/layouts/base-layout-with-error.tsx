import { GlobalError } from '#widgets/global-error';
import { Layout } from '#shared/ui';
import { Header } from '#widgets/header';

export const BaseLayoutWithError = <Layout headerSlot={<Header />} contentSlot={<GlobalError />} />;
