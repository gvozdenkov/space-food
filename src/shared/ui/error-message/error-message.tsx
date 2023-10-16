import { clx } from '#shared/lib';

type Props = {
  message: string;
  extraClass?: string;
};

export const ErrorMessage = ({ message, extraClass = '' }: Props) => {
  return (
    <p
      aria-live='assertive'
      className={clx('text text_type_main-default text_color_error', {
        [extraClass]: !!extraClass,
      })}>
      {message}
    </p>
  );
};
