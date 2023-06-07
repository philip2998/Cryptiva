const ContactBox = ({ icon, title, description }) => {
  return (
    <div className="contact-box d-flex flex-wrap">
      <div className="contact-icon py-1 px-2 rounded m-0">
        <i className="fs-3">{icon}</i>
      </div>
      <div className="contact-info">
        <h4 className="fs-5">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactBox;
