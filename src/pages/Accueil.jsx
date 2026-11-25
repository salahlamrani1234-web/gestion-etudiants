import {Link} from "react-router-dom";
export default function Accueil(){
    return(
        <div className="centre">
            <h1>Bienvenue</h1>
            <p className="centre">Application de gestion des étudiants</p>
            <Link to="/login" className="btn">Se connecter</Link>
        </div>
    )
}