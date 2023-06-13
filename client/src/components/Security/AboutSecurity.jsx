import ListItem from './ListItem';
import Reveal from '../utils/Reveal';
import { securityTitle, securityDescription, securityWorks } from './text';

const AboutSecurity = () => {
  return (
    <div className="d-flex flex-wrap p-1 p-md-4 p-lg-1 p-xl-1">
      <div className="mb-3 mt-5">
        <Reveal animationType="fadeInRight">
          <h5 className="mb-4 why-us">Why Choose Us</h5>
        </Reveal>
        <h2 className="me-5">{securityTitle}</h2>
        <p className="me-5">{securityDescription}</p>
        <ul className="list-unstyled">
          {securityWorks.map((work, index) => (
            <ListItem key={index} content={work} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSecurity;
