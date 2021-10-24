import NavTab from "../../components/NavBar";
import { PageTitle } from '../../styles/global'


const Home: React.FC = () => {
  return (
    <div className="App">
      <div className="">
        <PageTitle>Cardápio</PageTitle>
      </div>  
      <NavTab />
    </div>
  );
};

export default Home;
