import ProtectionPicture from './ProtectionPicture';
import AboutProtection from './AboutProtection';

const Protection = () => {
  return (
    <section className="container protection">
      <div className="row">
        <div className="col-md-6">
          <ProtectionPicture />
        </div>
        <div className="col-md-6">
          <AboutProtection />
        </div>
      </div>
    </section>
  );
};

export default Protection;
