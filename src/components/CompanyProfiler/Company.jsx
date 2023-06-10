const Company = ({ imageSrc, imageAlt }) => {
  return (
    <div className="company-element col-lg-3 col-md-6 col-sm-6 col-6 pb-4 text-center">
      <img className="main-company" src={imageSrc} alt={imageAlt}></img>
    </div>
  );
};

export default Company;
