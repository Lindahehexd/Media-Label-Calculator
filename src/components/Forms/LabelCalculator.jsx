import { useState } from "react";
import tab2 from "../../svgs/tab2.svg";

export const LabelCalculator = (props) => {
  const { toggleState } = props;

  // state
  const [labelLength, setLabelLength] = useState("");
  const [labelHeight, setLabelHeight] = useState("");
  const [gapHeight, setGapHeight] = useState("");
  const [amount, setAmount] = useState("");
  const [info2, setInfo2] = useState("");

  const calcAmount = (event) => {
    event.preventDefault();
    const lh = parseFloat(labelHeight);
    const gh = parseFloat(gapHeight);
    if (gapHeight < 0 || labelHeight < 0) {
      alert("Please enter a valid number");
    } else {
      const amount = labelLength / (lh + gh);
      setAmount(amount.toFixed(0));
      setInfo2("pcs");
    }
  };

  const init = (e) => {
    e.preventDefault();
    setLabelLength("");
    setLabelHeight("");
    setGapHeight("");
    setAmount("");
    setInfo2("");
  };

  return (
    <div className={toggleState === 2 ? "content  active-content" : "content"}>
      <form onSubmit={calcAmount}>
        <div>
          <div>
            <img className="img_2" src={tab2} alt="" />
          </div>
          <div>
            <label>Material Length (mm)</label>
            <input type="number" min="0" value={labelLength} onChange={(event) => setLabelLength(event.target.value)} />
          </div>
          <label>Label Height (mm)</label>
          <input type="number" min="0" value={labelHeight} onChange={(event) => setLabelHeight(event.target.value)} />
        </div>
        <div>
          <label>Gap Height (mm)</label>
          <input type="number" min="0" value={gapHeight} onChange={(event) => setGapHeight(event.target.value)} />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={init}>
            Reset
          </button>
        </div>
      </form>
      <div className="center">
        <h3>
          You're able to print : {amount} {info2}
        </h3>
      </div>
    </div>
  );
};
