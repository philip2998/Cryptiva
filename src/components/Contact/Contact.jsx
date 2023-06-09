import GetTouch from './GetTouch';
import MainButton from '../Buttons/MainButton';
import Form from './Form';
import { useState } from 'react';

const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('SEND MESSAGE');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setButtonText('Sending...');
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    const result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({
        succes: false,
        message: 'Something went wrong, please try again later.',
      });
    }
  };
  return (
    <section className="contactus mt-5" id="connect">
      <div className="container position-relative">
        <div className="row d-flex flex-wrap">
          <div className="col-sm-12 col-md-6">
            <GetTouch />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row form-container">
              <div className="form-box rounded-3 border-2 p-5">
                <form onSubmit={handleSubmit}>
                  <Form formDetails={formDetails} onFormUpdate={onFormUpdate} />
                  <MainButton text={buttonText} />
                  {status.message && (
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }
                    >
                      {status.message}
                    </p>
                  )}
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
