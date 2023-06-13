import { useState } from 'react';
import { validateForm } from './formValidations';
import GetTouch from './GetTouch';
import MainButton from '../common/Buttons/MainButton';
import Form from './Form';
import Popup from '../utils/Popup';
import ReCAPTCHA from 'react-google-recaptcha';

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
      console.log(process.env.TOKEN);

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
        },
        body: JSON.stringify({ ...formDetails, token: process.env.TOKEN }),
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
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="row form-container">
              <div className="form-box rounded-3 border-2 p-5">
                <form onSubmit={handleSubmit}>
                  <Form
                    formDetails={formDetails}
                    onFormUpdate={onFormUpdate}
                    errors={errors}
                  />
                  <ReCAPTCHA
                    sitekey="6Le-h5ImAAAAAAHLuLcRqZUaKKHx5cB9xHlNUdna"
                    onChange={handleRecaptchaChange}
                    className="pb-3"
                  />
                  <MainButton text={buttonText} disabled={!isCaptchaVerified} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
