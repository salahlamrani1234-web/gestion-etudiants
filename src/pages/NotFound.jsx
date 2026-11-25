import {Link} from "react-router-dom"

export default function NotFound(){
    return(
        <div className="centre">
            <h1>404</h1>
            <p>Page non trouvable</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    )
}
