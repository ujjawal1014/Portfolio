export default function Home_Text_Section_Name({ Name }) {
  return (
    <>
      <div className="Home_Text_Section_Name">
        <h1 className="Home_Text_Section_Name_First_Line">
          I'm <span className="Home_Text_Section_Name_Myname">{Name}</span>
        </h1>
        <h2 className="Home_Text_Section_Name_Second_Line">
          Full Stack Developer
        </h2>
      </div>
    </>
  );
}
