import Education_Card from "./Education_Card";
import Svnit from "./SVNIT.jpg";
import Kvs from "./KVS.jpg";
import Education_Section_Heading from "./Education_Section_Heading";
import "./Education.css";

export default function Education() {
  return (
    <section className="Education" id="education">
      <div className="Education_Section_Heading">
        <h2>Education</h2>
      </div>
      <div className="All_Education_Card">
        <Education_Card
          Image={Svnit}
          Institue={"Sardar Vallabhai Patel National Institute Of Technology"}
          Degree={"Computer Science Engineering"}
          Year={"2022 - 2026"}
          Location={"Surat, Gujarat"}
        />
        <Education_Card
          Image={Kvs}
          Institue={"Kendriya Vidyalaya Air Force Station Makarpura"}
          Degree={"Higher Secondary School"}
          Year={"2021 - 2022"}
          Location={"Vadodara, Gujarat"}
        />
        <Education_Card
          Image={Kvs}
          Institue={"Kendriya Vidyalaya Air Force Station Makarpura"}
          Degree={"Secondary School"}
          Year={"2019 - 2020"}
          Location={"Vadodara, Gujarat"}
        />
      </div>
    </section>
  );
}
