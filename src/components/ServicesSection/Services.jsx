import ServiceCard from './ServiceCard';
import serviceData from './serviceData';

const Services = () => {
  return (
    <div className="container-fluid position-relative services">
      <div className="bg-overlay"></div>
      <div className="row position-relative z-1">
        <div className="service-title text-center mb-5">
          <h5 className="pb-3 service-main-title">Our Services</h5>
          <h2 className="fw-bold">What We Offer</h2>
        </div>
        <div className="col-12 px-5">
          <div className="row">
            {serviceData.map((service, index) => {
              return <ServiceCard key={index} {...service} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
