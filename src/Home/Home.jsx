import Home_Text_Section from "./Home_Text_Section";
import Home_Photo_Section from "./Home_Photo_Section";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="Home" id="home">
        <Home_Text_Section />
        <Home_Photo_Section />
      </div>
    </>
  );
}
