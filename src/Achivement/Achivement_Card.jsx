import Achivement_Card_Photo from "./Achivement_Card_Photo";
import Achivement_Card_Text from "./Achivement_Card_Text";
import myImage from "./MMNCT.jpg"

export default function Achivement_Card() {
  return (
    <>
      <div className="Achivement_Card">
        <Achivement_Card_Photo image={myImage}/>
        <Achivement_Card_Text/>
      </div>
    </>
  );
}
