export default function Project_Card_Role({Myrole}) {
  return (
    <>
      <div className="Project_Card_Role">
        <h2 className="Project_Card_Role_My_Role">My Role </h2>
        <h4 className="Project_Card_Role_My_Role_Text">
          {Myrole}
        </h4>
      </div>
    </>
  );
}
