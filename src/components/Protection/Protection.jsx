import ProtectionPicture from './ProtectionPicture';
import AboutProtection from './AboutProtection';

const Protection = () => {
  return (
    <section className="container-fluid protection">
      <div className="row">
        <div className="col-sm-12 col-md-6 d-flex flex-wrap">
          <ProtectionPicture />
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-wrap">
          <AboutProtection />
        </div>
      </div>
    </section>
  );
};

export default Protection;
