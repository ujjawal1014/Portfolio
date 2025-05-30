import "./About_Me.css"
import About_Me_Content from "./About_Me_Content";
import About_Me_Heading from "./About_Me_Heading";


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
