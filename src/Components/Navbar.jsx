import { useState, useEffect } from "react";

export default function Navbar() {
  const links = ["About", "Articles", "Projects", "Speaking", "Uses"];
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.className = "bg-zinc-950 text-white";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.className = "bg-white text-black";
    }
  }, [dark]);

  return (
    <div className="flex justify-center pt-10 relative">
      {/* Nav Pills */}
      <div className="bg-black dark:bg-zinc-900 px-6 py-3 rounded-full flex gap-6 border border-zinc-700 shadow-lg">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="bg-black hover:text-blue-500 dark:bg-zinc-900 dark:hover:text-blue-400 px-3 py-1 rounded-full transition"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Moon Toggle Button */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute right-6 top-10 w-10 h-10 flex items-center justify-center rounded-full
        bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 shadow hover:scale-105 transition"
      >
        {dark ? (
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-zinc-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0
             10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm7-3h-1a1 1 0 110-2h1a1 1 0 110 2zM4 10H3a1 1 0 110-2h1a1 1 0 110 2zm9.95-5.95a1 1 0 011.414 0l.71.71a1 1 0 01-1.414 1.414l-.71-.71a1 1 0 010-1.414zM4.636 15.364a1 1 0 010-1.414l.71-.71a1 1 0 111.414 1.414l-.71.71a1 1 0 01-1.414 0zm10.728 0a1 1 0 01-1.414 0l-.71-.71a1 1 0 111.414-1.414l.71.71a1 1 0 010 1.414zM6.05 6.05a1 1 0 00-1.414 0l-.71.71a1 1 0 101.414 1.414l.71-.71a1 1 0 000-1.414z" />
          </svg>
        )}
      </button>
    </div>
  );
}