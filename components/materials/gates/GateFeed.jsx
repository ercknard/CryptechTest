import LeftGateFeed from "./LeftGateFeed";
import RightGateFeed from "./RightGateFeed";

const GateFeed = () => (
  <>
    <input
      placeholder="controls"
      alt="controls"
      type="checkbox"
      unchecked="true"
    />

    <LeftGateFeed />

    <RightGateFeed />
  </>
);

export default GateFeed;
