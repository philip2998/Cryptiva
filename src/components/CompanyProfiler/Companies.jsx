import Company from './Company';
import software from '../../assets/img/software.svg';
import hexatech from '../../assets/img/hexatech.svg';
import metrics from '../../assets/img/metrics.svg';
import tripletech from '../../assets/img/tripletech.svg';

const Companies = () => {
  const companyData = [
    { imageSrc: software, imageAlt: 'Software Company' },
    { imageSrc: hexatech, imageAlt: 'Hexatech Company' },
    { imageSrc: metrics, imageAlt: 'Metrics Company' },
    { imageSrc: tripletech, imageAlt: 'Tripletech Company' },
  ];

  return (
    <section className="company" id="companies">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center mt-5">
              <div className="companies-widget text-center">
                <h2>
                  Trusted Over <span>2300 + </span>Companies in the World
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center mt-5"
          style={{ marginLeft: '100px' }}
        >
          {companyData.map((company, index) => (
            <Company
              key={index}
              imageSrc={company.imageSrc}
              imageAlt={company.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
