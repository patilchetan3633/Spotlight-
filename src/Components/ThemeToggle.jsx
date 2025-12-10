import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }   
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 hover:scale-110 transition"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.64 13.65A9 9 0 0110.35 2.36a1 1 0 00-1.2-1.2A11 11 0 1022.84 14.85a1 1 0 00-1.2-1.2z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-16a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011-1v-1a1 1 0 11-2 0v1a1 1 0 011 1zm10-10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 12a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm15.36 6.36a1 1 0 011.41 0l.7.7a1 1 0 01-1.41 1.41l-.7-.7a1 1 0 010-1.41zM5.64 5.64a1 1 0 010-1.41l.7-.7a1 1 0 011.41 1.41l-.7.7a1 1 0 01-1.41 0zm14.72-1.41a1 1 0 010 1.41l-.7.7a1 1 0 11-1.41-1.41l.7-.7a1 1 0 011.41 0zM5.64 18.36a1 1 0 011.41 0l.7.7a1 1 0 01-1.41 1.41l-.7-.7a1 1 0 010-1.41z" />
        </svg>
      )}
    </button>
  );
}
