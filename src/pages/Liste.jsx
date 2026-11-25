import {useState} from "react";
import {useApp} from "../AppContext";
import {Link} from "react-router-dom";

export default function Liste(){
  const {etudiants,supprimer} = useApp();
  const [recherche,setRecherche] = useState("");
  const resultat = etudiants.filter((e) =>
    e.nom.toLowerCase().includes(recherche.toLowerCase())
  );
  const ConfirnerSuppression = (etudiant) => {
    if(window.confirm(`Supprimer ${etudiant.nom} ?`)){
      supprimer(etudiant.id);
    }
  };

  return (
    <div>
     <h1>Liste des étudiants</h1>
     <input className="Recherche" placeholder="Rechercher par nom..."
        value={recherche} onChange={(e) => setRecherche(e.target.value)}/>
     <Link to="/etudiants/ajouter" className="btn">Ajouter</Link>

      {resultat.length === 0 ? (
        <p>Aucun étudiant trouvé.</p>
      ) : (
     <table>
         <thead>
           <tr><th>Nom</th><th>Filière</th><th>Action</th></tr>
         </thead>
       <tbody>
         {resultat.map((e) => (
          <tr key={e.id}>
           <td>{e.nom}</td>
           <td>{e.filiere}</td>
           <td>
            <Link to={`/etudiants/${e.id}`}>Voir details</Link>{" "}
            <Link to={`/etudiants/${e.id}/modifier`}>Modifier</Link>{" "}
            <button onClick={() => ConfirnerSuppression(e)}>Supprimer</button>
           </td>
          </tr>
          ))}
        </tbody>
     </table>
    )}
    </div>
  );
}