import Achivement_Card from "./Achivement_Card";
import myImage1 from "./MMNCT.jpg";
import myImage2 from "./Gwoc.jpg";
import "./Achivement.css";

export default function Achivement() {
  return (
    <section className="Achivement" id="Achievement">
      <div className="Achivement_Heading">
        <h2>Achievements</h2>
      </div>
      <div className="Achivement_Grid">
        <Achivement_Card
          image={myImage1}
          Event_Name={"MMNCT"}
          About_Event={
            "MMNCT is a night cricket tournament at our college, and I am the highest wicket-taker of the tournament. Our team made history by becoming the first 2nd-year team to win the tournament."
          }
          Date={"2023"}
          Category={"Sports"}
        />
        <Achivement_Card
          image={myImage2}
          Event_Name={"GWOC"}
          About_Event={
            "GWOC is a hackathon conducted by GDSC, and our task was to create a website for Mudberry Studio. My dedicated teammates Aditya Rai, Anushka Ghuse, Diya Shah, and I won the competition."
          }
          Date={"2023"}
          Category={"Hackathon"}
        />
        <Achivement_Card
          image={myImage2}
          Event_Name={"GWOC"}
          About_Event={
            "GWOC is a hackathon conducted by GDSC, and our task was to create a website for Mudberry Studio. My dedicated teammates Aditya Rai, Anushka Ghuse, Diya Shah, and I won the competition."
          }
          Date={"2023"}
          Category={"Hackathon"}
        />
        <Achivement_Card
          image={myImage2}
          Event_Name={"GWOC"}
          About_Event={
            "GWOC is a hackathon conducted by GDSC, and our task was to create a website for Mudberry Studio. My dedicated teammates Aditya Rai, Anushka Ghuse, Diya Shah, and I won the competition."
          }
          Date={"2023"}
          Category={"Hackathon"}
        />
      </div>
    </section>
  );
}
