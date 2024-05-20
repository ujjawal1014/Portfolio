import Navbar_link_Content from "./Navbar_Link_Content";
export default function Navbar_link() {
  return (
    <>
      <div className="Navbar_link">
        <Navbar_link_Content route={"/home"} text={"HOME"} />
        <Navbar_link_Content route={"/home"} text={"EDUCATION"} />
        <Navbar_link_Content route={"/home"} text={"SKILLS"} />
        <Navbar_link_Content route={"/home"} text={"PROJECTS"} />
        <Navbar_link_Content route={"/home"} text={"ACHIEVEMENTS"} />
      </div>
    </>
  );
}
