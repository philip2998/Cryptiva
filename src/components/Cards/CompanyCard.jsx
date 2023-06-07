const CompanyCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="card">
      <div className="item-box">
        <div className="pt-3 ps-2 d-flex flex-row align-items-start">
          <img
            className="h-auto border-none rounded-0 shadow-none"
            src={imageSrc}
            alt={imageAlt}
          ></img>
          <h4 className="ps-3 pt-1 h4 font-weight-bold">{title}</h4>
        </div>
        <p className="ls-wider lh-base text-start mt-2 me-1 mb-5 ms-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CompanyCard;
