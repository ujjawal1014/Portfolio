import Project_Card_Photo from "./Project_Card_Photo";
import Project_Card_Tools from "./Project_Card_Tools";
import Project_Card_Role from "./Project_Card_Role";
import Project_Name from "./Project_Name";

export default function Project_Card({
  Projct_Number,
  MyRole,
  Name,
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
  ProjectLink,
}) {
  return (
    <a href={ProjectLink} target="_blank" rel="noopener noreferrer" className="Project_Card_Link">
      <div className="Project_Card">
        <div className="Project_Number">Project {Projct_Number}</div>
        <div className="Project_Image">
          <img src={image} alt={Name} />
          <div className="Project_Overlay">
            <span className="View_Project">View Project</span>
          </div>
        </div>
        <div className="Project_Content">
          <h3 className="Project_Title">{Name}</h3>
          <p className="Project_Description">{MyRole}</p>
          <div className="Project_Tools">
            {Tool1 && (
              <div className="Tool_Icon" style={{ color: Color1 }}>
                {Tool1}
              </div>
            )}
            {Tool2 && (
              <div className="Tool_Icon" style={{ color: Color2 }}>
                {Tool2}
              </div>
            )}
            {Tool3 && (
              <div className="Tool_Icon" style={{ color: Color3 }}>
                {Tool3}
              </div>
            )}
            {Tool4 && (
              <div className="Tool_Icon" style={{ color: Color4 }}>
                {Tool4}
              </div>
            )}
            {Tool5 && (
              <div className="Tool_Icon" style={{ color: Color5 }}>
                {Tool5}
              </div>
            )}
            {Tool6 && (
              <div className="Tool_Icon" style={{ color: Color6 }}>
                {Tool6}
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
