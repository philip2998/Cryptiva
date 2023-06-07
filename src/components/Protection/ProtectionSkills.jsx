import highQuality from '../../assets/img/highQuality.svg';
import effectiveProtection from '../../assets/img/effectiveProtection.svg';
import { skillOne, skillTwo } from './text';

const ProtectionSkills = () => {
  return (
    <div className="container mt-2 mb-0 d-flex">
      <div className="row">
        <div className="col-md-6">
          <div className="mt-0 me-2 mb-0 ms-0">
            <div className="text-start">
              <img
                className="mt-0 me-0 mb-1 ms-0"
                src={highQuality}
                alt="High Quality Service"
              ></img>
              <h4>High Quality Service</h4>
              <p>{skillOne}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="mt-0 me-0 mb-1 ms-0"
            src={effectiveProtection}
            alt="Effective Protection"
          ></img>
          <h4>Effective Protection</h4>
          <p>{skillTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProtectionSkills;
