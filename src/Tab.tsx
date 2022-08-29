import "./Tab.css";

interface Props {
  title: String;
  active: boolean;
}

function Tab(props: Props) {
  return (
    <div className={props.active ? "tab tab-active" : "tab tab-inactive"}>
      <p>{props.title}</p>
    </div>
  );
}

export default Tab;
