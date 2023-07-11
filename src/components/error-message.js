export const ErrorMessage = (props) => {
  const { message, extraClass } = props;
  return <p className={`text text_type_main-default text_color_error ${extraClass}`}>{message}</p>;
};
