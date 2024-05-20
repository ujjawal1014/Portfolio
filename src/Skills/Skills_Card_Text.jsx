export default function Skills_Card_Text({ Icon_Name, Icon_Text }) {
  return (
    <>
      <div className="Skills_Card_Text">
        <h2 className="Skills_Card_Text_Heading">{Icon_Name}</h2>
        <h4 className="Skills_Card_Text_Data">{Icon_Text}</h4>
      </div>
    </>
  );
}
