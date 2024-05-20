import Achivement_Card from "./Achivement_Card";
import Achivement_Heading from "./Achivement_Heading";
import "./Achivement.css"
import "./Achivement_480.css";
import "./Achivement_481_640.css";
import "./Achivement_641_767.css";

import "./Achivement_768_1024.css";
import "./Achivement_1025_1280.css";
import "./Achivement_1281_1366.css";
// import "./Achivement_1367_1920.css";


export default function Achivement() {
  return (
    <>
      <div className="Achivement">
        <Achivement_Heading />
        <div className="All_Achivement_Card">
          <Achivement_Card />
          <Achivement_Card />
          <Achivement_Card />
          <Achivement_Card />
          <Achivement_Card />
        </div>
      </div>
    </>
  );
}
