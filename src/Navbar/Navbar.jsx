import Navbar_Logo from "./Navbar_Logo";
import Navbar_link from "./Navbar_Link";
import Navbar_Bars from "./Navbar_Bars";
import Navbar_Horizontal from "./Navbar_Horizontal";
import myimage from "./th.jpg";

import "./Navbar.css";
import "./Navbar_480.css";
import "./Navbar_481_640.css";
import "./Navbar_641_767.css";
import "./Navbar_768_1024.css";
import "./Navbar_1025_1280.css";
import "./Navbar_1281_1366.css";
import "./Navbar_1367_1920.css";

export default function Navbar() {
  
  
  return (
    <>
      <div className="Navbar">
        <Navbar_Logo image={myimage} />
        <Navbar_link />
        <Navbar_Bars/>
        
      </div>
      <Navbar_Horizontal className="Navbar_Vertical"/>
    </>
  );
}
