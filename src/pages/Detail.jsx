import {Link,useParams} from "react-router-dom";
import {useApp} from "../AppContext";

export default function Detail(){
  const {id} = useParams();
  const {etudiants} = useApp();
  const etudiant = etudiants.find((e) => e.id === Number(id));

  if(!etudiant) {
    return <p>Étudiant introuvable.<Link to="/etudiants">Retour</Link></p>;
  }

  return (
    <div className="Carte">
      <h1>{etudiant.nom}</h1>
      <p>{etudiant.email}</p>
      <p>{etudiant.filiere}</p>
      <Link to="/etudiants">
      <Link to={`/etudiants/${etudiant.id}/modifier`} className="btn">Modifier</Link>
      {" "}← Retour</Link>
    </div>
  );
}
