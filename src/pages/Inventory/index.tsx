import { useState } from "react";

// import "./index.css";
import InventoryItem from "../../components/InventoryItem";

const Inventory: React.FC = () => {
  const [inventoryList, setInventoryList] = useState([{name: "queijo"}])

  return (
    <div className="Inventory">
      <div className="">
        <h1>Estoque</h1>
      </div> 
      {inventoryList && inventoryList.map(item => 
        <InventoryItem item={item}/>
      )}
    </div>
  );
};

export default Inventory;
