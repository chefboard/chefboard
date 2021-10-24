import { useState, useEffect } from "react";

// import "./index.css";
import InventoryItem from "../../components/InventoryItem";

interface inventoryListProps {
  name: string;
  quantity: number;
}

const Inventory: React.FC = () => {
  const [inventoryList, setInventoryList] = useState<inventoryListProps[]>([])
  
  useEffect(() => {
    const inventoryMock = [
      {name: "queijo", quantity: 80},
      {name: "tomate", quantity: 30},
      {name: "cebola", quantity: 55}]

    setInventoryList(inventoryMock)
  },[])

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
