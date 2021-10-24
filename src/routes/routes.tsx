import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Invoice from "../pages/Invoice";
import Queue from "../pages/Queue";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component={ Home }  path="/" exact/>
           <Route component={ Invoice } path="/comanda" />
           <Route component={ Queue }  path="/fila" />
           <Route component={ Dashboard }  path="/dashboard" exact/>
           <Route component={ Inventory }  path="/dashboard/estoque" />
       </BrowserRouter>
   )
}

export default Routes;