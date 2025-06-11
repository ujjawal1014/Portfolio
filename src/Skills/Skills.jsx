import Skills_Card from "./Skills_Card";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiJqueryUiLogo } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { TbLetterC } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoGitNetwork } from "react-icons/io5";
import { MdDataObject } from "react-icons/md";

import Skills_Heading from "./Skills_Heading";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <div className="Skills" id="skills">
        <Skills_Heading />
        <br></br>
        <h1 className="Skills_Type_Name">1.Web Development</h1>
        <br />
        <div className="Skills_All_Card_WebD">
          <Skills_Card
            icon_color={"#fb8500"}
            Icon={<FaHtml5 />}
            Icon_Name={"HTML"}
            Icon_Text={
              "During the early stages of my career, I devoted a significant amount of time to mastering HTML, and as a result, I have developed an exceptionally strong proficiency in it."
            }
          />
          <Skills_Card
            icon_color={"#48cae4"}
            Icon={<FaCss3Alt />}
            Icon_Name={"CSS"}
            Icon_Text={
              "Styling, being an immensely creative aspect of web development, is where I derive immense joy and fulfillment, dedicating ample time to mastering CSS."
            }
          />
          <Skills_Card
            icon_color={"#fee440"}
            Icon={<TbBrandJavascript />}
            Icon_Name={"JAVASCRIPT"}
            Icon_Text={
              "Crafting logic is a realm that truly excites me, and integrating JavaScript into a website not only enhances its functionality but also aligns with the curriculum of my college courses."
            }
          />
          <Skills_Card
            icon_color={"#4cc9f0"}
            Icon={<FaBootstrap />}
            Icon_Name={"Bootstrap"}
            Icon_Text={
              "I am a proficient Bootstrap user with intermediate expertise. I have applied Bootstrap in several projects and possess ample knowledge of its capabilities."
            }
          />
          <Skills_Card
            icon_color={"#80b918"}
            Icon={<FaNodeJs />}
            Icon_Name={"NodeJs"}
            Icon_Text={
              "In my MERN Stack projects, I've proficiently utilized Node.js and Express.js for the backend server, enabling swift and efficient operations."
            }
          />
          <Skills_Card
            icon_color={"#007f5f"}
            Icon={<SiMongodb />}
            Icon_Name={"MongoDb"}
            Icon_Text={
              "I've actively contributed to a multitude of full stack projects, skillfully utilizing MongoDB Atlas as the cornerstone for reliable data storage and management."
            }
          />
          <Skills_Card
            icon_color={"#ff70a6"}
            Icon={<SiMysql />}
            Icon_Name={"Sql"}
            Icon_Text={
              "SQL, a fundamental database technology taught in my courses, has been notably easy to grasp, and I've adeptly applied it in numerous projects with great success."
            }
          />
          <Skills_Card
            icon_color={"#c9184a"}
            Icon={<DiJqueryUiLogo />}
            Icon_Name={"Jquery"}
            Icon_Text={
              "Mastering jQuery considerably streamlined and enhanced my web development process, making it notably more efficient, effective, and enjoyable."
            }
          />

          <Skills_Card
            icon_color={"#70d6ff"}
            Icon={<FaReact />}
            Icon_Name={"React"}
            Icon_Text={
              "I have been honing my skills in React development and have gained substantial proficiency. Additionally, I have completed several projects using React, further enhancing my expertise."
            }
          />
        </div>
        <br></br>
        <h1 className="Skills_Type_Name">2.Languages</h1>
        <br></br>

        <div className="Skills_All_Card_Language">
          <Skills_Card
            icon_color={"#f35b04"}
            Icon={<TbLetterC />}
            Icon_Name={"C"}
            Icon_Text={
              "As a proficient coder in  C , I actively engage with numerous competitive programming platforms, including LeetCode, GeeksforGeeks, and CodeChef."
            }
          />
          <Skills_Card
            icon_color={"#f7b538"}
            Icon={<TbBrandCpp />}
            Icon_Name={"C++"}
            Icon_Text={
              "As a proficient coder in both C and C++, I actively engage with numerous competitive programming platforms, including LeetCode, GeeksforGeeks, and CodeChef."
            }
          />

          <Skills_Card
            icon_color={"#d81159"}
            Icon={<FaJava />}
            Icon_Name={"Java"}
            Icon_Text={
              "Java has been the primary coding language on which I've dedicated a significant amount of time due to my keen interest in object-oriented programming concepts."
            }
          />
          <Skills_Card
            icon_color={"#72ddf7"}
            Icon={<FaPython />}
            Icon_Name={"Python"}
            Icon_Text={
              "Python is notably one of the easiest languages for me, as I've been acquainted with it since my school days, which has fostered a strong foundation."
            }
          />

          <Skills_Card
            icon_color={"#fee440"}
            Icon={<TbBrandJavascript />}
            Icon_Name={"JAVASCRIPT"}
            Icon_Text={
              "Crafting logic is a realm that truly excites me, and integrating JavaScript into a website not only enhances its functionality but also aligns with the curriculum of my college courses."
            }
          />
        </div>
        <br></br>
        <h1 className="Skills_Type_Name">3.Course</h1>
        <br></br>
        <div className="Skills_All_Card_Language">
          <Skills_Card
            icon_color={"#ff206e"}
            Icon={<HiMiniComputerDesktop />}
            Icon_Name={"Operating System"}
            Icon_Text={
              "I have acquired knowledge about various types of operating systems, understanding their efficiency and determining the most suitable OS for specific purposes and contexts."
            }
          />
          <Skills_Card
            icon_color={"#4cc9f0"}
            Icon={<IoGitNetwork />}
            Icon_Name={"Computer Network"}
            Icon_Text={
              "I have thoroughly delved into the intricacies of network layers and have successfully executed a diverse array of server and client-based projects as well."
            }
          />

          <Skills_Card
            icon_color={"#f35b04"}
            Icon={<MdDataObject />}
            Icon_Name={"Oops"}
            Icon_Text={
              "Object-oriented programming (OOP) concepts are pivotal in my code and a compelling aspect of my field of interest, shaping my approach to software development."
            }
          />
        </div>
      </div>
    </>
  );
}
