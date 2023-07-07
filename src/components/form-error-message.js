export const FormErrorMessage = (props) => {
  const { extraClass } = props;
  return (
    <p className={`text text_type_main-default text_color_error ${extraClass}`}>{props.message}</p>
  );
};
