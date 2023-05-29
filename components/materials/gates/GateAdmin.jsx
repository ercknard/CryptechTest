import LeftGateAdmin from "./LeftGateAdmin";
import RightGateAdmin from "./RightGateAdmin";

const GateAdmin = () => (
  <>
    <input
      placeholder="controls"
      alt="controls"
      type="checkbox"
      unchecked="true"
    />

    <LeftGateAdmin />

    <RightGateAdmin />
  </>
);

export default GateAdmin;
