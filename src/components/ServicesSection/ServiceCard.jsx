const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="service-box rounded mt-0 me-2 mb-4 ms-0 p-0">
        <div className="service-box-content text-center py-5 px-4">
          <img className="service-img mb-3" src={imageSrc} alt=""></img>
          <h3 className="my-2">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
