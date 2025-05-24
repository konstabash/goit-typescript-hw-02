import { FormEvent } from "react";
import s from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  handleChangeQuery: (newQuery: string) => void;
}

const SearchBar = ({ handleChangeQuery }: SearchBarProps) => {
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = form.elements.namedItem("input") as HTMLInputElement;
    handleChangeQuery(query.value);
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
