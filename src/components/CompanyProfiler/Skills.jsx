import CompanyCard from '../common/Cards/CompanyCard';
import Companies from './Companies';
import security from '../../assets/img/security.svg';
import privacy from '../../assets/img/privacy.svg';
import certifiedIndustry from '../../assets/img/certifiedIndustry.svg';
import {
  skillOneDescription,
  skillOneTitle,
  skillTwoDescription,
  skillTwoTitle,
  skillThreeDescription,
  skillThreeTitle,
} from './text';

const Skills = () => {
  return (
    <section className="skill mb-4 pb-5 z-1" id="skills">
      <div className="container d-flex mb-5 p-2">
        <div className="row g-3 justify-content-between">
          <div className="col-sm-12 col-lg-4">
            <div className="mt-3 mb-1">
              <CompanyCard
                imageSrc={security}
                imageAlt={skillOneTitle}
                title={skillOneTitle}
                description={skillOneDescription}
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="mt-3 mb-1 ">
              <CompanyCard
                imageSrc={privacy}
                imageAlt={skillTwoTitle}
                title={skillTwoTitle}
                description={skillTwoDescription}
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="mt-3 mb-1">
              <CompanyCard
                imageSrc={certifiedIndustry}
                imageAlt={skillThreeTitle}
                title={skillThreeTitle}
                description={skillThreeDescription}
              />
            </div>
          </div>
        </div>
      </div>
      <Companies />
    </section>
  );
};

export default Skills;
