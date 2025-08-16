import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const HandleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    if (query === "") {
      toast.error("Please enter your search query.", {
        duration: 4000,
        position: "top-center",
        removeDelay: 1000,
      });
      return;
    }
    onSubmit(query);
  };
  return (
    <header className={styles.header}>
      <Toaster />
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <form className={styles.form} action={HandleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
