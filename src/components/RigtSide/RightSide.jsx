
import Parking from "../Parking/parking";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Parking</h3>
        <Parking />
      </div>
    </div>
  );
};

export default RightSide;
