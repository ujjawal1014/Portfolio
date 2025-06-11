import Education_Card_Photo from "./Education_Card_Photo";
import Education_Card_Text from "./Education_Card_Text";
export default function Education_Card({
  Image,
  Institue,
  Degree,
  Year,
  Location,
}) {
  return (
    <div className="Education_Card">
      <div className="Education_Card_Image">
        <img src={Image} alt={Institue} />
      </div>
      <div className="Education_Card_Content">
        <div>
          <h2>{Institue}</h2>
          <p>{Degree}</p>
        </div>
        <div className="Education_Card_Details">
          <span>{Year}</span>
          <span>{Location}</span>
        </div>
      </div>
    </div>
  );
}
