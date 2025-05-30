import Education_Card_Photo from "./Education_Card_Photo";
import Education_Card_Text from "./Education_Card_Text";
export default function Education_Card({
  Image,
  Institue,
  Degree,
}) {
  return (
    <>
      <div className="Edcuation_Card">
        <Education_Card_Photo image={Image} />
        <Education_Card_Text
          Institue={Institue}
          Degree={Degree}
        />
      </div>
    </>
  );
}
