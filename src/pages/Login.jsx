import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useApp} from "../AppContext";

export default function Login() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [identifiant,setIdentifiant] = useState("");
  const [motDePasse,setMotDePasse] = useState("");
  const [erreur,setErreur] = useState("");
  const envoyer = (e) => {
    e.preventDefault();
    if(login(identifiant,motDePasse)) {
      navigate("/dashboard");
    } else {
      setErreur("Identifiant ou mot de passe incorrect");
    }
  };

  return (
    <form onSubmit={envoyer} className="Formulaire">
      <h2>Connexion</h2>
      <input placeholder="Identifiant" value={identifiant} onChange={(e) => setIdentifiant(e.target.value)}/>
      <input type="password" placeholder="Mot de passe" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)}/>
      {erreur && <p className="Erreur">{erreur}</p>}
      <button className="btn">Se connecter</button>
    </form>
  );
}
