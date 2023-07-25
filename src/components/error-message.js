export const ErrorMessage = ({ message, extraClass }) => {
  return (
    <p
      aria-live='assertive'
      className={`text text_type_main-default text_color_error ${extraClass}`}>
      {message}
    </p>
  );
};
