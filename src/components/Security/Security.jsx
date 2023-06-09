import AboutSecurity from './AboutSecurity';
import SecurityPicture from './SecurityPicture';
import Reveal from '../utils/Reveal';

const Security = () => {
  return (
    <section className="container-fluid position-relative security">
      <div className="bg-overlay"></div>
      <div className="row position-relative z-1">
        <div className="col-sm-12 col-md-6 ps-5 d-flex flew-wrap">
          <AboutSecurity />
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-wrap pe-0">
          <Reveal animationType="fadeInLeft">
            <SecurityPicture />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Security;
