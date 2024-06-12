export default function Achivement_Card_Text({ Event_Name, About_Event }) {
  return (
    <>
      <div className="Achivement_Card_Text">
        <h2 className="Achivement_Card_Text_Event_Name">{Event_Name}</h2>
        <h4 className="Achivement_Card_Text_About_Event">{About_Event}</h4>
      </div>
    </>
  );
}
