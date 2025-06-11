import Achivement_Card_Photo from "./Achivement_Card_Photo";
import Achivement_Card_Text from "./Achivement_Card_Text";
import myImage from "./MMNCT.jpg";

export default function Achivement_Card({ image, Event_Name, About_Event, Date, Category }) {
  return (
    <div className="Achivement_Card">
      <div className="Achivement_Image">
        <img src={image} alt={Event_Name} />
        <div className="Achivement_Category">{Category}</div>
      </div>
      <div className="Achivement_Content">
        <div className="Achivement_Header">
          <h3 className="Achivement_Title">{Event_Name}</h3>
          <span className="Achivement_Date">{Date}</span>
        </div>
        <p className="Achivement_Description">{About_Event}</p>
      </div>
    </div>
  );
}
