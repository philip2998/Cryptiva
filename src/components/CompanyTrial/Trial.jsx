import { Parallax } from 'react-parallax';
import { trialText } from './text';
import parallaxImg from '../../assets/img/programmer-laptop.jpg';

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
            <div className="row d-flex flex-wrap position-absolute align-items-center justify-content-center w-100">
              <div className="col-xs-12 md-8 lg-6 xl-4 text-center">
                <div className="trial-box d-flex flex-wrap">
                  <div className="trial-content">
                    <div className="trial-title">
                      <h2 className="pb-3">
                        Still Confused About Our Features? Get a Free Trial 7
                        Days
                      </h2>
                    </div>
                    <div className="trial-text">
                      <p>{trialText}</p>
                    </div>
                  </div>
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
