import {NavLink,useNavigate} from "react-router-dom";
import {useApp} from "../AppContext";

export default function Navbar(){
    const {user,logout} = useApp();
    const navigate = useNavigate();
    const deconnecter=() => {
      logout();
      navigate("/");
    };
    
    return(
     <nav className="navbar">
      <strong>Gestion des étudiants</strong>
      <div>
        <NavLink to="/">Accueil</NavLink>
         {user ? (
          <>
          <NavLink to="/etudiants">Étudiants</NavLink>
          <NavLink to="/dashboard">Tableau de bord</NavLink>
          <button onClick={deconnecter} className="btn btn-outline">
            Déconnexion
          </button>
          </>
          ) : (
        <NavLink to="/login">Connexion</NavLink>
          )}
      </div>
     </nav>
    );
}
