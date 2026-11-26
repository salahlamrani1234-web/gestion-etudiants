import {createContext,useState,useContext,useEffect} from "react";

const AppContext = createContext(null);
const Donnees_Initiales = [
    {id:1 , nom:"Salah Lamrani" , email:"salah.lamrani@gmail.com" , filiere:"Dev"},
    {id:2 , nom:"Saad Idrissi" , email:"saad.idrissi@gmail.com" , filiere:"Infra"},
    {id:3 , nom:"Sara Alami" , email:"sara.alami@gmail.com" , filiere:"Dev"}
];

function Lire(cle,defaut) {
    try{
        const valeur = localStorage.getItem(cle);
        return valeur ? JSON.parse(valeur) : defaut;
    } catch {
        return defaut;
    }
}

export function AppFournisseur({children}){
    const [user,setUser] = useState(() => Lire("user",null));
    const [etudiants,setEtudiants] = useState(Lire("etudiants",Donnees_Initiales));
        useEffect(() => {
            localStorage.setItem("user",JSON.stringify(user));
        }, [user]);
        useEffect(() => {
            localStorage.setItem("etudiants",JSON.stringify(etudiants));
        },[etudiants]);
    const login = (identifiant, motDePasse) => {
    if (identifiant === "admin" && motDePasse === "1234"){
      setUser({nom :"Admin"});
      return true;
    }
      return false;
    };
    const logout=() => setUser(null);

    const ajouter = (etudiant) =>
    setEtudiants([...etudiants , {...etudiant , id:Date.now()}]);
    const modifier = (id,donnees) =>
    setEtudiants(etudiants.map((e) => (e.id === id ? {...e,...donnees} : e)));
    const supprimer = (id) => setEtudiants(etudiants.filter((e) => e.id !== id));

return(
    <AppContext.Fournisseur value={{user, login, logout,etudiants, 
    ajouter, modifier, supprimer}}>
        {children}
    </AppContext.Fournisseur>
);
}
export const useApp=() => useContext(AppContext);