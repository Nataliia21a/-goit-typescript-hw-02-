import css from "../SearchBar/SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userSaerchWord = form.elements.userSaerchWord.value;
    if (userSaerchWord.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSearch(userSaerchWord);
    form.reset();
  };
  return (
    <header>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="userSaerchWord"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
