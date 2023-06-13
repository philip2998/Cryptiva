import ProtectionPicture from './ProtectionPicture';
import AboutProtection from './AboutProtection';
import Reveal from '../utils/Reveal';

const Protection = () => {
  return (
    <section className="container-fluid protection z-1" id="about">
      <div className="row">
        <div className="col-md-12 col-lg-6 d-flex flex-wrap">
          <Reveal animationType="fadeInRight">
            <ProtectionPicture />
          </Reveal>
        </div>
        <div className="col-md-12 col-lg-6 d-flex flex-wrap">
          <AboutProtection />
        </div>
      </div>
    </section>
  );
};

export default Protection;
