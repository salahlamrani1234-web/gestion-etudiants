import {Link} from "react-router-dom";
import {useApp} from "../AppContext";

export default function Dashboard(){
  const {user,etudiants} = useApp();
  const filieres = [...new Set(etudiants.map((e) => e.filiere))];

  return (
    <div>
      <h1>Tableau de bord</h1>
      <p>Bonjour {user.nom}</p>

      <div className="stats">
        <div className="stat">
          <h2>{etudiants.length}</h2>
          <p>Étudiants</p>
        </div>
        {filieres.map((fil) => (
          <div className="stat" key={fil}>
            <h2>{etudiants.filter((e) => e.filiere === fil).length}</h2>
            <p>{fil}</p>
          </div>
        ))}
      </div>
      <Link to="/etudiants/ajouter" className="btn">Ajouter un étudiant</Link>
    </div>
  );
}