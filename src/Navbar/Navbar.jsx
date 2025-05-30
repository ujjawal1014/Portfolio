import Navbar_Logo from "./Navbar_Logo";
import Navbar_link from "./Navbar_Link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Navbar_Logo />
      <Navbar_link />
    </nav>
  );
}
