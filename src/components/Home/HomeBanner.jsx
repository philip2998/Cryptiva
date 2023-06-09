import Typewriter from './Typewriter';
import headerImg from '../../assets/img/header-img.svg';
import Reveal from '../utils/Reveal';
import { header } from './text';

const Banner = () => {
  const { text } = Typewriter(['Security', 'Protection', 'Company'], 1000);

  return (
    <section className="banner" id="home">
      <div className="background-overlay">
        <div className="container">
          <div className="row aligh-items-center">
            <div className="col-xs-12 col-md-6 col-xl-7">
              <div>
                <div className="banner-main-text">
                  <h1 className="display-1 fw-bold mb-4 lh-1 ls-wider">
                    {`Professional`}{' '}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Security", "Protection", "Company" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                    <h1 className="fw-bolder">With Reliable Service</h1>
                  </h1>
                </div>
                <p className="py-0 ps-0 fs-sm ls-wider lh-base">{header}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-xl-5">
              <Reveal animationType="fadeInLeft">
                <div>
                  <img src={headerImg} alt="Header Img" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
