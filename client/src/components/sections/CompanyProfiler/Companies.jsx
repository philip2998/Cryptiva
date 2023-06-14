import Reveal from '../../utils/Reveal';
import Company from './Company';
import { numOfCompanies, companyData } from './text';

const Companies = () => {
  return (
    <section className="company" id="companies">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center mt-5">
              <div className="companies-widget text-center">
                <h2 className="fs-3">
                  Trusted Over{' '}
                  <span className="position-relative mt-n5">
                    {numOfCompanies}
                  </span>
                  Companies in the World
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Reveal animationType="fadeInDown">
          <div className="row d-flex justify-content-center mt-5">
            {companyData.map((company, index) => (
              <Company
                key={index}
                id={index}
                imageSrc={company.imageSrc}
                imageAlt={company.imageAlt}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Companies;
