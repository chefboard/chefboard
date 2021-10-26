import {useState, useEffect} from 'react'
import NavTab from "../../components/NavBar";
import { PageTitle , Content} from '../../styles/global'

interface RequestProps {
  name: string;
  price: number;
}


const Invoice: React.FC = () => {
  const [tableRequests, setTableRequests] = useState<RequestProps[]>([])
  const [userRequests, setUserRequests] = useState<RequestProps[]>([])

  useEffect(() => {
    const tableRequestsMock = [
      {name: 'item', price: 35.5},
      {name: 'item2', price: 35.5},
      {name: 'item3', price: 35.5}
    ]

    const userRequestsMock = [
      {name: 'item', price: 35.5},
      {name: 'item2', price: 35.5},
      {name: 'item3', price: 35.5}
    ]
    
    setTableRequests(tableRequestsMock);
    setUserRequests(userRequestsMock);
  }, [])

  return (
    <div className="App">
      <div className="">
        <PageTitle>Comanda</PageTitle>
      </div>
      <Content>
        <div>
          <h2>Pedidos da mesa</h2>
          <ul>
            {tableRequests.map((request: any) =>  
              <li>{request.name}</li>
            )}
          </ul>
        </div>
        <div>
          <h2>Seus Pedidos</h2>
          <ul>
            {userRequests.map((request: any) =>  
              <li>{request.name}</li>
            )}
          </ul>
        </div>
        <div>
          <h2>Total</h2>
        </div>
      </Content>
      <NavTab />
    </div>
  );
};

export default Invoice;
