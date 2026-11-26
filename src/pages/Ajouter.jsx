import {useNavigate} from "react-router-dom";
import {useApp} from "../AppContext";
import FormEtudiant from "../components/FormEtudiant";

export default function Ajouter(){
  const {ajouter} = useApp();
  const naviguer = useNavigate();

  return (
    <FormEtudiant titre="Ajouter un étudiant" valeursInitiales={{nom :"",email : "",filiere : "" }}
      onSubmit={(donnees) => {
        ajouter(donnees);
        naviguer("/etudiants");
      }}
    />
  );
}
