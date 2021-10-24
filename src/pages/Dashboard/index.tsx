import Card from "../../components/Card";

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <div className="">
        <h1>Dashboard</h1>
      </div> 
      <Card title='produtos' link="/dashboard/produtos"/>
      <Card title='estoque' link="/dashboard/estoque">
      </Card>
    </div>
  );
};

export default Dashboard;
