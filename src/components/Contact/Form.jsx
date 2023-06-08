import Input from './Input';
import Textarea from './Textarea';
import MainButton from '../Buttons/MainButton';

const Form = () => {
  const formFields = [
    { type: 'text', placeholder: 'Your Name' },
    { type: 'email', placeholder: 'Your Email' },
    { type: 'text', placeholder: 'Your Subject' },
    { type: 'textarea', placeholder: 'Your Message' },
  ];
  return (
    <div className="row form-container">
      <div className="form-box rounded-3 border-2 p-5">
        <form>
          {formFields.map((field, index) => {
            if (field.type === 'textarea') {
              return <Textarea key={index} placeholder={field.placeholder} />;
            } else {
              return <Input key={index} placeholder={field.placeholder} />;
            }
          })}
          <MainButton text="SEND MESSAGE" />
        </form>
      </div>
    </div>
  );
};

export default Form;
