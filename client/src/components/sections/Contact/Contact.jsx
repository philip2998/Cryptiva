import { useState } from 'react';
import { validateForm } from './formValidations';
import GetTouch from './GetTouch';
import ContactForm from './ContactForm';
import Popup from '../../utils/Popup';

const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('SEND MESSAGE');
  const [showPopup, setShowPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      if (!isCaptchaVerified) {
        return;
      }

      const formErrors = validateForm(formDetails);
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      setButtonText('Sending...');

      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText('Send');

      await response.json();
      setFormDetails(formInitialDetails);

      if (response.status === 200) {
        setPopupSuccess(true);
      } else {
        setPopupSuccess(false);
      }
      setShowPopup(true);
    } catch (err) {
      console.error('Error: ', err);
    }
  };

  const handleClosePopup = () => setShowPopup(false);
  const handleRecaptchaChange = () => setIsCaptchaVerified(true);

  return (
    <section className="contactus mt-5" id="connect">
      {showPopup && <Popup success={popupSuccess} onClose={handleClosePopup} />}
      <div className="container position-relative">
        <div className="row d-flex flex-wrap">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <GetTouch />
          </div>
          <ContactForm
            handleSubmit={handleSubmit}
            formDetails={formDetails}
            onFormUpdate={onFormUpdate}
            errors={errors}
            handleRecaptchaChange={handleRecaptchaChange}
            buttonText={buttonText}
            isVerified={isCaptchaVerified}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
