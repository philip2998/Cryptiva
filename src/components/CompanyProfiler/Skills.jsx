import CardItem from "./CardItem";
import Companies from "./Companies";
import security from "../../assets/img/security.svg";
import privacy from "../../assets/img/privacy.svg";
import certifiedIndustry from "../../assets/img/certifiedIndustry.svg";

const Skills = () => {
  return (
    <section className="skill mb-4 pb-5" id="skills">
      <div className="container d-flex justify-content-around mb-5 p-2">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-1 me-3 mb-1 ms-1">
              <CardItem
                imageSrc={security}
                imageAlt="Security"
                title="Security Service"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-1 me-2 mb-1 ms-2">
              <CardItem
                imageSrc={privacy}
                imageAlt="Privacy"
                title="Data Privacy"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-1 me-1 mb-1 ms-3">
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
