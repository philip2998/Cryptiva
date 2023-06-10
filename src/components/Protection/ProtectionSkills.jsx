import highQuality from '../../assets/img/highQuality.svg';
import effectiveProtection from '../../assets/img/effectiveProtection.svg';
import { skillOne, skillTwo } from './text';

const ProtectionSkills = () => {
  return (
    <div className="container mt-2 mb-0 d-flex">
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-12 pe-0">
          <div className="mt-0 me-2 mb-0 ms-0">
            <div className="text-start">
              <img
                className="mt-0 me-0 mb-1 ms-0"
                src={highQuality}
                alt="High Quality Service"
              ></img>
              <h4 className="pe-5">High Quality Service</h4>
              <p className="mb-0 pe-5 pb-3">{skillOne}</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-12">
          <img
            className="mt-0 me-0 mb-1 ms-0"
            src={effectiveProtection}
            alt="Effective Protection"
          ></img>
          <h4 className="pe-5">Effective Protection</h4>
          <p className="mb-0 pe-5">{skillTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProtectionSkills;
