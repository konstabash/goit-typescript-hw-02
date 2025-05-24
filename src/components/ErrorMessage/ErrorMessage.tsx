import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <span className={s.error}>
      There has been a server error. Please try again later
    </span>
  );
};

export default ErrorMessage;
