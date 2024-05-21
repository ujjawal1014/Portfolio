import Navbar_link_Content from "./Navbar_Link_Content";
export default function Navbar_link() {
  return (
    <>
      <div className="Navbar_link">
        <Navbar_link_Content route={"#Home"} text={"HOME"} />
        <Navbar_link_Content route={"#Education"} text={"EDUCATION"} />
        <Navbar_link_Content route={"#Skills"} text={"SKILLS"} />
        <Navbar_link_Content route={"#Projects"} text={"PROJECTS"} />
        <Navbar_link_Content route={"#Achievement"} text={"ACHIEVEMENTS"} />
      </div>
    </>
  );
}
