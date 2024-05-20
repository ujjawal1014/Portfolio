export default function Navbar_link_Content({ route, text }) {
  return (
    <>
      <div className="Navbar_link_Content">
        <a href={route}>{text}</a>
      </div>
    </>
  );
}
