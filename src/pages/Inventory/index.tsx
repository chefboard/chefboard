import { useState, useEffect } from "react";

import InventoryItem from "../../components/InventoryItem";
import { PageTitle } from '../../styles/global'


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
        <PageTitle>Estoque</PageTitle>
      </div> 
      {inventoryList && inventoryList.map(item => 
        <InventoryItem item={item}/>
      )}
    </div>
  );
};

export default Inventory;
