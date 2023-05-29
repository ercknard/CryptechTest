import LeftGateCoin from "./LeftGateCoin";
import RightGateCoin from "./RightGateCoin";

const GateCoin = () => (
  <>
    <input
      placeholder="controls"
      alt="controls"
      type="checkbox"
      unchecked="true"
    />

    <LeftGateCoin />

    <RightGateCoin />
  </>
);

export default GateCoin;
