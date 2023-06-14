import Form from './Form';
import ReCAPTCHA from 'react-google-recaptcha';
import MainButton from '../../common/Buttons/MainButton';

const ContactForm = ({
  handleSubmit,
  errors,
  formDetails,
  onFormUpdate,
  handleRecaptchaChange,
  buttonText,
  isVerified,
}) => {
  return (
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
            <MainButton text={buttonText} disabled={!isVerified} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
