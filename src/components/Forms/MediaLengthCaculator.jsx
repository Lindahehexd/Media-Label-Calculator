import { useState } from "react";
import tab1 from "../../svgs/tab1.svg";

export const MediaLengthCalculator = (props) => {
  // 從父元件傳下來的prop , 透過傳toggleState就可以控制要顯示哪個元件
  const { toggleState } = props;

  // state
  // 不用另外存 LabelLength 我刪掉了
  const [maxRollDiameter, setMaxRollDiameter] = useState("");
  const [coreOutsideDiameter, setCoreOutsideDiameter] = useState("");
  const [RibbonThinkness, setRibbonThickness] = useState("");
  const [cm, setCm] = useState("");
  const [mm, setMm] = useState("");
  const [inch, setInch] = useState("");

  // calc
  const calcLabelLength = (event) => {
    event.preventDefault();
    if (
      // 改成空字串時這裡進來要判斷是否為空字串 , 否則會運算失敗
      maxRollDiameter < 0 ||
      !Number(maxRollDiameter) ||
      coreOutsideDiameter < 0 ||
      !Number(coreOutsideDiameter) ||
      RibbonThinkness < 0 ||
      !Number(RibbonThinkness)
    ) {
      alert("Please enter a valid number");
    } else {
      // LabelLength 留在 function 內就好 不用用 state 存
      const labelLength =
        ((maxRollDiameter * maxRollDiameter - coreOutsideDiameter * coreOutsideDiameter) * 3.14) /
        (RibbonThinkness * 4);
      const fixedLabelLength = labelLength.toFixed(0);
      const inchNum = labelLength / 10 / 2.54;
      const fixedInch = inchNum.toFixed(1);
      setMm(`${fixedLabelLength} mm`);
      setCm(`${(fixedLabelLength / 10).toFixed(1)} cm`);
      setInch(`${fixedInch} inches`);
    }
  };

  //reset
  const init = (e) => {
    // 避免送出表單去觸發你 submit 綁定的 calcLabelLength
    e.preventDefault();
    setMaxRollDiameter("");
    setCoreOutsideDiameter("");
    setRibbonThickness("");
    setMm("");
    setCm("");
    setInch("");
  };

  return (
    <div className={toggleState === 1 ? "content  active-content" : "content"}>
      <form onSubmit={calcLabelLength}>
        <div>
          <img className="img_2" src={tab1} alt="" />
        </div>
        <div>
          <label>Max Roll Diameter (mm)</label>
          <input type="number" value={maxRollDiameter} onChange={(event) => setMaxRollDiameter(event.target.value)} />
        </div>
        <div>
          <label>Core Outside Diameter (mm)</label>
          <input
            type="number"
            value={coreOutsideDiameter}
            onChange={(event) => setCoreOutsideDiameter(event.target.value)}
          />
        </div>
        <div>
          <label>Material Thinkness (mm)</label>
          <input type="number" value={RibbonThinkness} onChange={(event) => setRibbonThickness(event.target.value)} />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          {/* reset 不用放submit , 你只有 submit去綁定 submit而已  */}
          <button className="btn btn-outline" onClick={init}>
            Reset
          </button>
        </div>
      </form>
      <div className="center">
        <h3> Material total length:</h3>
        <h3>{mm}</h3>
        <h3>{cm}</h3>
        <h3>{inch}</h3>
      </div>
    </div>
  );
};
