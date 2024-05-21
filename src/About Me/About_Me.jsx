import "./About_Me.css"
import About_Me_Content from "./About_Me_Content";
import About_Me_Heading from "./About_Me_Heading";
import "./About_Me_480.css";
import "./About_Me_481_640.css";
import "./About_Me_641_767.css";
import "./About_Me_768_1024.css";
import "./About_Me_1025_1280.css";
import "./About_Me_1281_1366.css";
// import "./About_Me_1367_1920.css";


export default function About_Me() {
  return (
    <>
      <div className="About_Me" id="Home">
        <About_Me_Heading/>
        <About_Me_Content/>
      </div>
    </>
  );
}
