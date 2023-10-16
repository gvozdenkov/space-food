import { clx } from '#shared/lib';
import { LoaderShape } from '#shared/ui/loader-shape';

import s from './feed-loader.module.scss';

type Props = {
  message: string;
  extraClass?: string;
};

export const FeedLoaderMessage = ({ message, extraClass = '' }: Props) => {
  return (
    <div className={clx(s.feedLoader, { [extraClass]: !!extraClass })}>
      <LoaderShape />
      <p className='text text_type_main-default mt-10'>{message}</p>
    </div>
  );
};
