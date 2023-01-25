import SidePanel from '../components/SidePanel';
import CampaignViewer from '../components/CampaignViewer';

function Home() {
  return (
    <div className="flex h-screen flex-row">
      <div className="flex-initial w-64">
        <SidePanel />
      </div>
      <div className="flex-1">
        <CampaignViewer />
      </div>
    </div>
  );
}

export default Home;
