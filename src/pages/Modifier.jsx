import {useNavigate,useParams} from "react-router-dom";
import {useApp} from "../AppContext";
import FormEtudiant from "../components/FormEtudiant";

export default function Modifier(){
  const {id} = useParams();
  const {etudiants,modifier } = useApp();
  const navigate = useNavigate();
  const etudiant = etudiants.find((e) => e.id === Number(id));

  if(!etudiant) return <p>Étudiant introuvable.</p>;

  return (
    <FormEtudiant titre="Modifier l'étudiant" valeursInitiales={etudiant}
      onSubmit={(donnees) => {
        modifier(etudiant.id,donnees);
        navigate("/etudiants");
      }}
    />
  );
}
