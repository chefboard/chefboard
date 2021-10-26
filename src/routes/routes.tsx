import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Invoice from "../pages/Invoice";
import Queue from "../pages/Queue";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Header from "../components/Header";


const Routes = () => {
   return(
       <BrowserRouter>
            <Header/>
           <Route component={ Home }  path="/" exact/>
           <Route component={ Invoice } path="/comanda" />
           <Route component={ Queue }  path="/fila" />
           <Route component={ Dashboard }  path="/dashboard" exact/>
           <Route component={ Inventory }  path="/dashboard/estoque" />
           <Route component={ Products }  path="/dashboard/produtos" />
           <Route component={ Product }  path="/dashboard/produto/:id" />
       </BrowserRouter>
   )
}

export default Routes;