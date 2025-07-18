import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import Loading from "../loading/Loading";

function Header() {
  const btns_links = [
    { path: "/home", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
  ];
  return (
    <header>
      <div className="left-logo">
        <Link to="/home">BERMAX GLOBAL</Link>
      </div>

      <nav>
        <ul>
          {btns_links.map((btn, index) => (
            <li key={index}>
              <Link to={btn.path}>{btn.text}</Link>
            </li>
          ))}
        </ul>
        <Link to="/auth">Logout</Link>
      </nav>
      <Outlet />
    </header>
  );
}
export default Header;
