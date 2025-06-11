import Project_Card from "./Project_Card";
import Project_Heading from "./Project_Heading";
import Project_image1 from "./Project1.jpg";
import Project_image2 from "./Project2.jpg";
import Project_image3 from "./Project3.jpg";
import Project_image4 from "./Project4.jpg";
import Project_image5 from "./Project5.jpg";

import "./Project.css";

import { FaNodeJs } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

export default function Project() {
  return (
    <section className="Project" id="project">
      <div className="Project_Heading">
        <h2>Projects</h2>
      </div>
      <div className="Project_Grid">
        <Project_Card
          Projct_Number={1}
          MyRole={
            "I've crafted our homepage with HTML, CSS, and JavaScript for responsiveness across devices, optimizing layout and functionality for various screen sizes to enhance user experience."
          }
          Name={"Mudbbery Studio"}
          image={Project_image1}
          Tool1={<FaHtml5 />}
          Tool2={<FaCss3Alt />}
          Tool3={<DiJavascript />}
          Color1={"#fb8500"}
          Color2={"#48cae4"}
          Color3={"#fee440"}
          ProjectLink="https://mudbberystudio.com"
        />
        <Project_Card
          Projct_Number={2}
          MyRole={
            "For my portfolio website, I meticulously crafted everything using React for the frontend, ensuring full responsiveness for a seamless experience on all devices."
          }
          Name={"My Portfolio"}
          image={Project_image2}
          Tool1={<FaHtml5 />}
          Tool2={<FaCss3Alt />}
          Tool3={<DiJavascript />}
          Tool4={<SiReact />}
          Tool5={<FaNodeJs />}
          Color1={"#fb8500"}
          Color2={"#48cae4"}
          Color3={"#fee440"}
          Color4={"#70d6ff"}
          Color5={"#80b918"}
          ProjectLink="https://your-portfolio-url.com"
        />
        <Project_Card
          Projct_Number={3}
          Name={"Missbakehouse Bakery"}
          MyRole={
            "I collaborated with MissBakeHouse, a growing startup, as a freelancer. I meticulously crafted their entire website, utilizing React for the frontend development."
          }
          image={Project_image3}
          Tool2={<FaCss3Alt />}
          Tool3={<DiJavascript />}
          Tool4={<SiReact />}
          Tool5={<FaNodeJs />}
          Color2={"#48cae4"}
          Color3={"#fee440"}
          Color4={"#70d6ff"}
          Color5={"#80b918"}
          ProjectLink="https://missbakehouse.com"
        />
        <Project_Card
          Projct_Number={4}
          MyRole={
            "The Bnb website is one of my top projects. Using MongoDB for the backend and frameworks like React, Express, and EJS, I developed the entire site independently."
          }
          Name={"BNB website"}
          image={Project_image4}
          Tool1={<FaHtml5 />}
          Tool2={<FaCss3Alt />}
          Tool3={<DiJavascript />}
          Tool4={<SiReact />}
          Tool5={<FaNodeJs />}
          Tool6={<SiMongodb />}
          Color1={"#fb8500"}
          Color2={"#48cae4"}
          Color3={"#fee440"}
          Color4={"#70d6ff"}
          Color5={"#80b918"}
          Color6={"#007f5f"}
          ProjectLink="https://bnb-website.com"
        />
        <Project_Card
          Projct_Number={5}
          MyRole={
            "The service connect is not just a project its a startup which is based on the idea of providing a platform for the people to connect with the service providers and to get the services at their doorstep."
          }
          Name={"VSMCT WEBSITE ( CRICKET TOURNAMENT )"}
          image={Project_image5}
          Tool1={<FaHtml5 />}
          Tool2={<FaCss3Alt />}
          Tool3={<DiJavascript />}
          Tool4={<SiReact />}
          Tool5={<FaNodeJs />}
          Tool6={<SiMongodb />}
          Color1={"#fb8500"}
          Color2={"#48cae4"}
          Color3={"#fee440"}
          Color4={"#70d6ff"}
          Color5={"#80b918"}
          Color6={"#007f5f"}
          ProjectLink="https://vsmct-cricket.com"
        />
        <Project_Card
          Projct_Number={6}
          MyRole={
            "The service connect is not just a project its a startup which is based on the idea of providing a platform for the people to connect with the service providers and to get the services at their doorstep."
          }
          Name={"Service-Connect"}
          image={Project_image5}
          Tool1={<FaHtml5 />}
          Tool2={<FaCss3Alt />}
          Tool3={<DiJavascript />}
          Tool4={<SiReact />}
          Tool5={<FaNodeJs />}
          Tool6={<SiMongodb />}
          Color1={"#fb8500"}
          Color2={"#48cae4"}
          Color3={"#fee440"}
          Color4={"#70d6ff"}
          Color5={"#80b918"}
          Color6={"#007f5f"}
          ProjectLink="https://service-connect-1fsd.onrender.com/"
        />
        <Project_Card
          Projct_Number={7}
          MyRole={
            "The Bnb website is one of my top projects. Using MongoDB for the backend and frameworks like React, Express, and EJS, I developed the entire site independently."
          }
          Name={"BNB website"}
          image={Project_image4}
          Tool1={<FaHtml5 />}
          Tool2={<FaCss3Alt />}
          Tool3={<DiJavascript />}
          Tool4={<SiReact />}
          Tool5={<FaNodeJs />}
          Tool6={<SiMongodb />}
          Color1={"#fb8500"}
          Color2={"#48cae4"}
          Color3={"#fee440"}
          Color4={"#70d6ff"}
          Color5={"#80b918"}
          Color6={"#007f5f"}
          ProjectLink="https://bnb-website-2.com"
        />
      </div>
    </section>
  );
}
