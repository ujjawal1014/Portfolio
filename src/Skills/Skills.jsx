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
import "./Skills_480.css";
import "./Skills_481_640.css";
import "./Skills_641_767.css";
import "./Skills_768_1024.css";
import "./Skills_1025_1280.css";
import "./Skills_1281_1366.css";
import "./Skills_1367_1920.css";

export default function Skills() {
  return (
    <>
      <div className="Skills">
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
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />
          <Skills_Card
            icon_color={"#48cae4"}
            Icon={<FaCss3Alt />}
            Icon_Name={"CSS"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />
          <Skills_Card
            icon_color={"#fee440"}
            Icon={<TbBrandJavascript />}
            Icon_Name={"JAVASCRIPT"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
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
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />
          <Skills_Card
            icon_color={"#007f5f"}
            Icon={<SiMongodb />}
            Icon_Name={"MongoDb"}
            Icon_Text={
              "I have worked on certain full stack projects where i have used MongoDB atlas for storing the data"
            }
          />
          <Skills_Card
            icon_color={"#ff70a6"}
            Icon={<SiMysql />}
            Icon_Name={"Sql"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />
          <Skills_Card
            icon_color={"#c9184a"}
            Icon={<DiJqueryUiLogo />}
            Icon_Name={"Jquery"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
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
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />
          <Skills_Card
            icon_color={"#72ddf7"}
            Icon={<FaPython />}
            Icon_Name={"Python"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />

          <Skills_Card
            icon_color={"#fee440"}
            Icon={<TbBrandJavascript />}
            Icon_Name={"JAVASCRIPT"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
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
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />
          <Skills_Card
            icon_color={"#4cc9f0"}
            Icon={<IoGitNetwork />}
            Icon_Name={"Computer Network"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />

          <Skills_Card
            icon_color={"#f35b04"}
            Icon={<MdDataObject />}
            Icon_Name={"Oops"}
            Icon_Text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat enim consectetur nam praesentium veritatis quas voluptatibus eos inventore ullam."
            }
          />
        </div>
      </div>
    </>
  );
}
