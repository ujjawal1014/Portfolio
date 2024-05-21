export default function Project_Card_Tools({ Tool1, Tool2, Tool3, Tool4,Tool5,Tool6,Color1, Color2, Color3, Color4,Color5,Color6 }) {
  const style1 = {
    color: Color1,
  };
  const style2 = {
    color: Color2,
  };
  const style3 = {
    color: Color3,
  };
  const style4 = {
    color: Color4,
  };
  const style5 = {
    color: Color5,
  };
  const style6 = {
    color: Color6,
  };
  return (
    <>
      <div className="Project_Card_Tools">
        <div className="Project_Card_Tools_Text">What I used ?</div>
        <div className="Project_Card_Tools_All_Icons">
          <div className="Project_Card_Tools_Icon" style={style1}> {Tool1} </div>
          <div className="Project_Card_Tools_Icon" style={style2}> {Tool2} </div>
          <div className="Project_Card_Tools_Icon" style={style3}> {Tool3} </div>
          <div className="Project_Card_Tools_Icon" style={style4}> {Tool4} </div>
          <div className="Project_Card_Tools_Icon" style={style5}> {Tool5} </div>
          <div className="Project_Card_Tools_Icon" style={style6}> {Tool6} </div>
          
        </div>
      </div>
    </>
  );
}
