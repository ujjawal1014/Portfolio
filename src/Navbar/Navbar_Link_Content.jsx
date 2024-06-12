export default function Navbar_link_Content({ route, text }) {
  function add() {
    const navbar = document.querySelector(".Navbar_Horizontal");
    navbar.classList.toggle("Navbar_Horizontal_left");
  }
  return (
    <>
      <div className="Navbar_link_Content">
        <a href={route} className=".Navbar_Horizontal" onClick={add}>
          {text}
        </a>
      </div>
    </>
  );
}
