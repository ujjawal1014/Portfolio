import Home_Text_Section_Contact from "./Home_Text_Section_Contact";
import Home_Text_Section_Links from "./Home_Text_Section_Links";
import Home_Text_Section_Name from "./Home_Text_Section_Name";
import Home_Text_Section_Resume from "./Home_Text_Section_Resume";

export default function Home_Text_Section() {
  return (
    <>
      <div className="Home_Text_Section">
        <Home_Text_Section_Name Name={"Ujjawal Tripathi"} />
        <Home_Text_Section_Links />
        <Home_Text_Section_Contact />
        <div className="Home_Text_Section_Resume_Contact">
          <Home_Text_Section_Resume value={"Resume"} Link={"/Resume.pdf"}/>
          <Home_Text_Section_Resume value={"Contact"} Link={"#Contact"}/>
        </div>
      </div>
    </>
  );
}
