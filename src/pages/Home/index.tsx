import "./index.css";
import NavTab from "../../components/NavTab/NavTab";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="">
        <h1>Cardápio</h1>
      </div>  
      <NavTab />
    </div>
  );
};

export default App;
