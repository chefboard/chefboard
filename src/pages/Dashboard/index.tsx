import Card from "../../components/Card";
import { PageTitle, Content } from '../../styles/global'


const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <div className="">
        <PageTitle>Dashboard</PageTitle>
      </div>
      <Content>
        <Card title='produtos' link="/dashboard/produtos"/>
        <Card title='estoque' link="/dashboard/estoque">
        </Card>
      </Content>
    </div>
  );
};

export default Dashboard;
