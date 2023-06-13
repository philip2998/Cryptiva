import ProtectionSkills from './ProtectionSkills';
import Reveal from '../utils/Reveal';
import { protectionTitle, protectionDescription } from './text';

const AboutProtection = () => {
  return (
    <div className="container about-protection">
      <div className="row">
        <div className="mb-2">
          <Reveal animationType="fadeInLeft">
            <h5 className="cryptiva-header">Welcome To Cryptiva</h5>
          </Reveal>
        </div>
        <div className="ms-2 pt-0 pe-4 pb-2 ps-0">
          <h2 className="pe-5">{protectionTitle}</h2>
        </div>
        <div className="mt-2 me-0 mb-2 ms-0">
          <p>{protectionDescription}</p>
        </div>
        <ProtectionSkills />
      </div>
    </div>
  );
};

export default AboutProtection;
