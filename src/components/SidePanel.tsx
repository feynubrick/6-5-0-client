import SidePanelButton from './SidePanelButton';

function SidePanel() {
  return (
    <div className="h-full bg-slate-200 flex flex-col border-2 border-slate-600 divide-y divide-slate-400">
      <SidePanelButton text="HOME" />
      <SidePanelButton text="캠페인" />
      <SidePanelButton text="마이 페이지" />
    </div>
  );
}

export default SidePanel;
