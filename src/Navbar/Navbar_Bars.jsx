import { FaBars } from "react-icons/fa";
export default  function Navbar_Bars(){

    function add(){
        const navbar = document.querySelector(".Navbar_Horizontal");
        navbar.classList.toggle("Navbar_Horizontal_left")

    }
    
    return(
        <>
        <div className="Navbar_Bars" onClick={add} >
            <FaBars/>
            </div></>
    )
}