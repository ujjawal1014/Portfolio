import Project_Card from "./Project_Card";
import Project_Heading from "./Project_Heading";
import Project_image from "./Project1.jpg";
import { SiReact } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import "./Project.css";
import "./Project_480.css";
import "./Project_481_640.css";
import "./Project_641_767.css";
import "./Project_768_1024.css";
import "./Project_1025_1280.css";
import "./Project_1281_1366.css";
import "./Project_1367_1920.css";


import { FaNodeJs } from "react-icons/fa";

export default function Project() {
  return (
    <>
      <div className="Project">
        <Project_Heading />
        <Project_Card
          Projct_Number={1}
          image={Project_image}
          Tool1={<SiReact />}
          Tool2={<FaNodeJs />}
          Tool3={<FaCss3Alt />}
          Tool4={<FaCss3Alt />}
        />
        <Project_Card
          Projct_Number={1}
          image={Project_image}
          Tool1={<SiReact />}
          Tool2={<FaNodeJs />}
          Tool3={<FaCss3Alt />}
          Tool4={<FaCss3Alt />}
        />
        <Project_Card
          Projct_Number={1}
          image={Project_image}
          Tool1={<SiReact />}
          Tool2={<FaNodeJs />}
          Tool3={<FaCss3Alt />}
          Tool4={<FaCss3Alt />}
        />
      </div>
    </>
  );
}
