import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
export default function Home_Text_Section_Links() {
  return (
    <>
      <div className="Home_Text_Section_Links">
        <a href="https://www.instagram.com/ujjawaltripathi1406/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ujjawal-tripathi-003935255/">
          <CiLinkedin />
        </a>
        <a href="https://github.com/ujjawal1014">
          <FaGithub />
        </a>
        <a href="https://www.codechef.com/users/ujjawal_1014">
          <SiCodechef />
        </a>
      </div>
    </>
  );
}
