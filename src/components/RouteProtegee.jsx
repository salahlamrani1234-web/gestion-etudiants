import {Navigate,Outlet} from "react-router-dom";
import {useApp} from "../AppContext";

export default function RouteProtegee() {
  const {user} = useApp();
  return user ? <Outlet/> : <Navigate to="/login" replace/>;
}
