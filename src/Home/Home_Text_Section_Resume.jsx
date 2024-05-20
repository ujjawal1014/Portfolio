export default function Home_Text_Section_Resume({ value ,Link}) {
  
  
  
 
  return (
    <>
      <div className="Home_Text_Section_Resume">
        <a href={Link}  rel="noopener noreferrer" >
          <button className="Home_Text_Section_Resume_Button" >{value}</button>
        </a>
      </div>
    </>
  );
}
