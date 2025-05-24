import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={s.button} onClick={onClick} type="button">
      Load More...
    </button>
  );
};

export default LoadMoreBtn;
