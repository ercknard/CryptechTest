import LeftGate from "./LeftGate";
import RightGate from "./RightGate";

const Gate = () => (
  <>
    <input
      placeholder="controls"
      alt="controls"
      type="checkbox"
      unchecked="true"
    />

    <LeftGate />

    <RightGate />
  </>
);

export default Gate;
