import { BeatLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <BeatLoader color="#1fcecb" />
    </div>
  );
};

export default Loader;
