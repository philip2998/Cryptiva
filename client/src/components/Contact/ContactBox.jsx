const ContactBox = ({ icon, title, description }) => {
  return (
    <div className="contact-box d-flex text-left mb-3">
      <div className="me-3">
        <div className="py-2 px-3 rounded contact-icon">
          <i className="fs-3">{icon}</i>
        </div>
      </div>
      <div className="contact-info">
        <h4 className="fs-5">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactBox;
