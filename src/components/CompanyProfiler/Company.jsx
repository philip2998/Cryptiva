const Company = ({ imageSrc, imageAlt }) => {
  return (
    <div className="company-element col-lg-3 col-md-6 col-sm-6">
      <img src={imageSrc} alt={imageAlt}></img>
    </div>
  );
};

export default Company;
