import { useState } from "react";
import "../styles/Tabs.css"
import { LabelCalculator } from "./Forms/LabelCalculator";
import { MediaLengthCalculator } from "./Forms/MediaLengthCaculator";

const Tabs = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          id="tab1"
        >
          Media Length Calculator
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          id="tab2"
        >
          Label Calculator
        </button>
      </div>

      <div className="content-tabs">
        <MediaLengthCalculator toggleState={toggleState} />
        <LabelCalculator toggleState={toggleState} />
      </div>
    </div>
  );
};

export default Tabs;
