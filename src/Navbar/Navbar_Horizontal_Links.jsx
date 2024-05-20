import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
export default function Navbar_Horizontal_Links() {
  return (
    <>
      <div className="Navbar_Horizontal_Links">
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <CiLinkedin />
        </a>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <SiCodechef />
        </a>
      </div>
    </>
  );
}
