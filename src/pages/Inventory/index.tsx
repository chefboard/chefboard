import { useState, useEffect } from "react";

import InventoryItem, { InventoryItemType } from "../../components/InventoryItem";
import { PageTitle } from '../../styles/global'
// import api from '../../services/api'

const Inventory: React.FC = () => {
  const [inventoryList, setInventoryList] = useState<InventoryItemType[]>([])
  
  useEffect(() => {
    fetch('https://upxptycof6.execute-api.us-east-1.amazonaws.com/Dev/dynamodbmanager/estoque?ingredients=all', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    },
    }).then(response => response.json()).then(setInventoryList)

    fetch('https://upxptycof6.execute-api.us-east-1.amazonaws.com/Dev/dynamodbmanager/estoque?ingredients=all', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    },
    }).then(response => response.json()).then(console.log)

  },[])

  return (
    <div className="Inventory">
      <div className="">
        <PageTitle>Estoque de Ingredientes</PageTitle>
      </div> 
      {inventoryList && inventoryList.map(item => 
        <InventoryItem item={item}/>
      )}
    </div>
  );
};

export default Inventory;
