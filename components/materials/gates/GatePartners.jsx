import LeftGatePartners from "./LeftGatePartners";
import RightGatePartners from "./RightGatePartners";

const GatePartners = () => (
  <>
    <input
      placeholder="controls"
      alt="controls"
      type="checkbox"
      unchecked="true"
    />

    <LeftGatePartners />

    <RightGatePartners />
  </>
);

export default GatePartners;
