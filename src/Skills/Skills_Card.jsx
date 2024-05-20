import Skills_Card_Icon from "./Skills_Card_icon";
import Skills_Card_Text from "./Skills_Card_Text";
export default function Skills_Card({Icon,Icon_Name,Icon_Text,icon_color}) {
    return (
      <>
        <div className="Skills_Card">
          <Skills_Card_Icon icon={Icon} icon_color={icon_color}/>
          <Skills_Card_Text Icon_Name={Icon_Name} Icon_Text={Icon_Text}/>
        </div>
      </>
    );
  }
  