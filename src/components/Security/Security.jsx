import AboutSecurity from './AboutSecurity';
import SecurityPicture from './SecurityPicture';
import Reveal from '../utils/Reveal';

const Security = () => {
  return (
    <section className="container-fluid position-relative security">
      <div className="background-overlay"></div>
      <div className="row position-relative z-1">
        <div className="col-md-12 col-lg-6 ps-5 d-flex flew-wrap">
          <AboutSecurity />
        </div>
        <div className="col-md-12 col-lg-6 d-flex flex-wrap pe-0">
          <Reveal animationType="fadeInLeft">
            <SecurityPicture />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Security;
