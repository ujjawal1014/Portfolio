export default function Education_Card_Text({ Institue, Degree }) {
  return (
    <>
      <div className="Edcuation_Card_Text">
        <h1 className="Edcuation_Card_Text_Institute">{Institue}</h1><br></br>
        <h2 className="Edcuation_Card_Text_Degree">{Degree}</h2>
      </div>
    </>
  );
}
