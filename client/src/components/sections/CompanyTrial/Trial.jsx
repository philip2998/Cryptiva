import { Parallax } from 'react-parallax';
import { trialDescription, trialTitle } from './text';
import Reveal from '../../utils/Reveal';
import parallaxImg from '../../../assets/img/programmer-laptop.jpg';

const Trial = () => {
  return (
    <section className="trial">
      <Parallax
        className="parallax-img position-relative"
        bgImage={parallaxImg}
        strength={300}
      >
        <div style={{ height: '500px' }}>
          <div className="container-fluid py-5 px-0">
            <div className="main-trial row flex-wrap position-absolute align-items-center justify-content-center w-100 w-sm-auto">
              <div className="col-xs-12 md-8 lg-6 xl-4 text-center">
                <div className="trial-box flex-wrap">
                  <Reveal animationType="fadeInUp">
                    <div className="trial-content">
                      <div className="trial-title">
                        <h2 className="pb-3">{trialTitle}</h2>
                      </div>
                      <div className="trial-text">
                        <p>{trialDescription}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Trial;
