import Achivement_Card_Photo from "./Achivement_Card_Photo";
import Achivement_Card_Text from "./Achivement_Card_Text";
import myImage from "./MMNCT.jpg";

export default function Achivement_Card({ image, Event_Name, About_Event }) {
  return (
    <>
      <div className="Achivement_Card">
        <Achivement_Card_Photo image={image} />
        <Achivement_Card_Text
          Event_Name={Event_Name}
          About_Event={About_Event}
        />
      </div>
    </>
  );
}
