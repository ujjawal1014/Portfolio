export default function Skills_Card_Icon({ icon, icon_color }) {
  const style = {
    color: icon_color,
  };
  return (
    <>
      <div className="Skills_Card_Icon" style={style}>
        <div className="Icon_Colour">{icon}</div>
      </div>
    </>
  );
}
