import CardItem from './CardItem';
import Companies from './Companies';
import security from '../../assets/img/security.svg';
import privacy from '../../assets/img/privacy.svg';
import certifiedIndustry from '../../assets/img/certifiedIndustry.svg';

const Skills = () => {
  return (
    <section className="skill mb-4 pb-5" id="skills">
      <div className="container d-flex mb-5 p-2">
        <div className="row g-3 justify-content-between">
          <div className="col-sm-12 col-lg-4">
            <div className="mt-3 mb-1">
              <CardItem
                imageSrc={security}
                imageAlt="Security"
                title="Security Service"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="mt-3 mb-1 ">
              <CardItem
                imageSrc={privacy}
                imageAlt="Privacy"
                title="Data Privacy"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="mt-3 mb-1">
              <CardItem
                imageSrc={certifiedIndustry}
                imageAlt="Industry"
                title="Industry Certified"
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
