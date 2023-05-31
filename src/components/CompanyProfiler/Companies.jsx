import software from "../../assets/img/software.svg";
import hexatech from "../../assets/img/hexatech.svg";
import metrics from "../../assets/img/metrics.svg";
import tripletech from "../../assets/img/tripletech.svg";

const Companies = () => {
  return (
    <section className="company" id="companies">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="companies-container d-flex justify-content-center mt-5">
              <div className="companies-widget text-center">
                <h2>
                  Trusted Over <span>2300 + </span>Companies in the World
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-around mt-5">
            <div className="company-element">
              <img src={software} alt="Software Company"></img>
            </div>
            <div className="company-element">
              <img src={hexatech} alt="Hexatech Company"></img>
            </div>
            <div className="company-element">
              <img src={metrics} alt="Metrics Company"></img>
            </div>
            <div className="company-element">
              <img src={tripletech} alt="Tripletech Company"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
