import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${input}`);
    // setInput("");
  };
  React.useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      setInput(q);
    }
  }, []);
  return (
    <header className="header">
      <Link to="/">
        <img
          src="	https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="MIITFLIX"
        />
      </Link>
      <div>
        <nav id="header__nav" className="header__nav">
          <ul>
            <li>
              <Link to="/my-watch-list">Watch List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <form
        onSubmit={handleSubmit}
        id="header__search"
        className="header__search"
      >
        <input
          type="search"
          placeholder="Search for a title..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Navbar;
