import Project_Card_Photo from "./Project_Card_Photo";
import Project_Card_Tools from "./Project_Card_Tools";
import Project_Card_Role from "./Project_Card_Role";
import Project_Name from "./Project_Name";

export default function Project_Card({
  image,
  Tool1,
  Tool2,
  Tool3,
  Tool4,
  Tool5,
  Tool6,
  Color1,
  Color2,
  Color3,
  Color4,
  Color5,
  Color6,
  Projct_Number,
  Name,
  MyRole,
}) {
  return (
    <>
      <div className="Project_Card_Complete">
        <div className="Project_Name">
          <Project_Name Project_Number={Projct_Number} Name={Name} />
        </div>
        <div className="Project_Card">
          <a href="">
            <Project_Card_Photo image={image} />
          </a>
          <Project_Card_Role Myrole={MyRole} />
          <Project_Card_Tools
            Tool1={Tool1}
            Tool2={Tool2}
            Tool3={Tool3}
            Tool4={Tool4}
            Tool5={Tool5}
            Tool6={Tool6}
            Color1={Color1}
            Color2={Color2}
            Color3={Color3}
            Color4={Color4}
            Color5={Color5}
            Color6={Color6}
          />
        </div>
      </div>
    </>
  );
}
