import { getTouch } from './text';
import ContactBox from './ContactBox';
import contactData from './contactData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GetTouch = () => {
  return (
    <>
      <div className="d-flex flex-wrap">
        <h5 className="">Contact Us</h5>
        <h2 className="fs-2">Get In Touch</h2>
      </div>
      <div className="d-flex flex-wrap">
        <p>{getTouch}</p>
      </div>
      <div className="row contact-section">
        {contactData.map((contact, index) => (
          <div key={index} className="col-sm-6">
            <ContactBox
              icon={<FontAwesomeIcon icon={contact.icon} />}
              title={contact.title}
              description={contact.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GetTouch;
