import s from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ handleChangeQuery }) => {
  const submitForm = (e) => {
    e.preventDefault();
    const query = e.target.elements.input.value;
    handleChangeQuery(query);
  };

  return (
    <header className={s.header}>
      <form onSubmit={submitForm}>
        <input
          name="input"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
          <FiSearch className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
