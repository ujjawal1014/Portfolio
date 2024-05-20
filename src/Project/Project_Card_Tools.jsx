export default function Project_Card_Tools({ Tool1, Tool2, Tool3, Tool4 }) {
  return (
    <>
      <div className="Project_Card_Tools">
        <div className="Project_Card_Tools_Text">What I used ?</div>
        <div className="Project_Card_Tools_All_Icons">
          <div className="Project_Card_Tools_Icon"> {Tool1} </div>
          <div className="Project_Card_Tools_Icon"> {Tool2} </div>
          <div className="Project_Card_Tools_Icon"> {Tool3} </div>
          <div className="Project_Card_Tools_Icon"> {Tool1} </div>
          <div className="Project_Card_Tools_Icon"> {Tool2} </div>
          <div className="Project_Card_Tools_Icon"> {Tool3} </div>
          
        </div>
      </div>
    </>
  );
}
