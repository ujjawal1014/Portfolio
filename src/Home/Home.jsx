import Home_Text_Section from "./Home_Text_Section";
import Home_Photo_Section from "./Home_Photo_Section";
import "./Home.css"
import "./Home_480.css";
import "./Home_481_640.css";
import "./Home_641_767.css";
import "./Home_768_1024.css";
import "./Home_1025_1280.css";
import "./Home_1281_1366.css";
// import "./Home_1367_1920.css";


export default function Home() {
  return (
    <>
      <div className="Home">
        <Home_Text_Section />
        <Home_Photo_Section />
      </div>
    </>
  );
}
