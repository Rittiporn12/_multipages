import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import Add from "./components/add/Add";
import Temperatures from "./components/temperatures/Temperatures";

import "./Components.css";

function Components() {
  return (
    <div className="components-container-all">
      <div className="components-container">
        <h3 className="titles">REACT COMPONENTS</h3>
        {/* child component */}
        <span className="all-class">
          <span className="counter-time-container2">
            <Counter name={"COUNTER"} value={0} />
            <Timer name={"TIMER"} />
          </span>
          <span className="add-container2">
            <Add />
          </span>
        </span>
        <Temperatures name={"TEMPERATURE"} celsiusValue={25} />

        <br />

        <h4 className="name-container-components">นายฤทธิพร ผึ่งผาย รหัส 66088346</h4>
      </div>
    </div>
  );
}

export default Components;
