import Education_Card from "./Education_Card";
import Svnit from "./SVNIT.jpg";
import Kvs from "./KVS.jpg";
import "./Education_480.css";
import "./Education_481_640.css";
import "./Education_641_767.css";
import "./Education_768_1024.css";
import "./Education_1025_1280.css";
import "./Education_1281_1366.css";
// import "./Education_1367_1920.css";


import Education_Section_Heading from "./Education_Section_Heading";
import "./Education.css";
export default function Education() {
  return (
    <>
      <div className="Education">
        <div>
          <Education_Section_Heading />
        </div>
        <div className="All_Education_Card">
          <Education_Card
            Image={Svnit}
            Institue={"Sardar Vallabhai Patel National Institute Of Technology"}
            Degree={"Cmputer Science Engineering"}
          />
          <Education_Card
            Image={Kvs}
            Institue={"Kendriya Vidyalaya Air Force Station Makarpura"}
            Degree={"Higher Secondary School"}
          />
          <Education_Card
            Image={Kvs}
            Institue={"Kendriya Vidyalaya Air Force Station Makarpura"}
            Degree={"Higher Secondary School"}
          />
        </div>
      </div>
    </>
  );
}
