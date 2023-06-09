import ListItem from './ListItem';
import Reveal from '../utils/Reveal';
import { securityText } from './text';

const AboutSecurity = () => {
  return (
    <div className="d-flex flex-wrap p-1 p-md-4 p-lg-1 p-xl-1">
      <div className="mb-3 mt-5">
        <Reveal animationType="fadeInRight">
          <h5 className="mb-4 why-us">Why Choose Us</h5>
        </Reveal>
        <h2 className="me-5">Provide Advanced Security for Advanced Threat</h2>
        <p className="me-5">{securityText}</p>
        <ul className="list-unstyled">
          <ListItem content="Content Delivery Network" />
          <ListItem content="Malware Detection Removal" />
          <ListItem content="24/7 Support And Remote Admit" />
        </ul>
      </div>
    </div>
  );
};

export default AboutSecurity;
