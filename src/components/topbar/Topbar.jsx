import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Boltach
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+7 908 611 83 72</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>dimaboltachh@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
