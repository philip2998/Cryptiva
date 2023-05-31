import ProtectionPicture from "./ProtectionPicture";
import AboutProtection from "./AboutProtection";

const Protection = () => {
  return (
    <div className="container protection">
      <div className="row">
        <div className="col-md-6">
          <ProtectionPicture />
        </div>
        <div className="col-md-6">
          <AboutProtection />
        </div>
      </div>
    </div>
  );
};

export default Protection;
