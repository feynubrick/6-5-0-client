interface IProps {
  text: string;
}

function SidePanelButton({ text }: IProps) {
  return <button>{text}</button>;
}

export default SidePanelButton;
