import ProtectionSkills from './ProtectionSkills';
import { aboutText } from './text';

const AboutProtection = () => {
  return (
    <div className="container about-protection">
      <div className="row">
        <div className="mb-2">
          <h5 className="cryptiva-header">Welcome To Cryptiva</h5>
        </div>
        <div className="ms-2 pt-0 pe-4 pb-2 ps-0">
          <h2 className="pe-5">
            The Perfect Solution For All The Protection Question
          </h2>
        </div>
        <div className="mt-2 me-0 mb-2 ms-0">
          <p>{aboutText}</p>
        </div>
        <ProtectionSkills />
      </div>
    </div>
  );
};

export default AboutProtection;
