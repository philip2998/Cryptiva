import { getTouch } from './text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reveal from '../utils/Reveal';
import ContactBox from './ContactBox';
import contactData from './contactData';

const GetTouch = () => {
  return (
    <>
      <div className="d-flex flex-wrap">
        <Reveal animationType="fadeInRight">
          <h5 className="fs-sm">Contact Us</h5>
        </Reveal>
      </div>
      <h2 className="fs-2 mt-2">Get In Touch</h2>
      <div className="d-flex flex-wrap">
        <p className="mb-5 text-left pe-5">{getTouch}</p>
      </div>
      <div className="row contact-section pe-5">
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
