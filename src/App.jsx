
import {Routes,Route} from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Liste from "./pages/Liste";
import NotFound from "./pages/NotFound.jsx";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar.jsx";
import Ajouter from "./pages/Ajouter.jsx";
import Modifier from "./pages/Modifier.jsx";
import Login from "./pages/Login.jsx";
import RouteProtegee from "./components/RouteProtegee.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App(){
  return(
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route element={<RouteProtegee/>}>
            <Route path="/etudiants" element={<Liste/>}/>
            <Route path="/etudiants/:id" element={<Detail/>}/>
            <Route path="/etudiants/ajouter" element={<Ajouter/>}/>
            <Route path="/etudiants/:id/modifier" element={<Modifier/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </>
  );
}
