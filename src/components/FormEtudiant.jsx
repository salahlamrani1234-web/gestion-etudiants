import {useState} from "react";

export default function FormEtudiant({titre,valeursInitiales,onSubmit}){
  const [form,setForm] = useState(valeursInitiales);
  const [erreur,setErreur] = useState("");
  const changer = (e) => setForm({...form,[e.target.name]: e.target.value});
  const envoyer = (e) => {
    e.preventDefault();
    if(!form.nom.trim() || !form.email.trim() || !form.filiere.trim()){
      setErreur("Tous les champs sont obligatoires");
    return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={envoyer} className="Formulaire">
      <h2>{titre}</h2>
      <input name="nom" placeholder="Nom complet" value={form.nom} onChange={changer}/>
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={changer}/>
      <input name="filiere" placeholder="Filière" value={form.filiere} onChange={changer}/>
      {erreur && <p className="Erreur">{erreur}</p>}
      <button className="btn">Enregistrer</button>
    </form>
  );
}