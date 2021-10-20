import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import Queue from "./pages/Queue";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component={ Home }  path="/" exact />
           <Route component={ Invoice } path="/comanda" />
           <Route component={ Queue }  path="/fila" />
       </BrowserRouter>
   )
}

export default Routes;