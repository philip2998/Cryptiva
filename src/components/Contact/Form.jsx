import Input from './Input';
import Textarea from './Textarea';
import formFields from './formFields';

const Form = ({ formDetails, onFormUpdate }) => {
  return (
    <>
      {formFields.map((field, index) => {
        if (field.type === 'textarea') {
          return (
            <Textarea
              key={index}
              value={formDetails[field.category]}
              placeholder={field.placeholder}
              onChange={e => onFormUpdate(field.category, e.target.value)}
            />
          );
        } else {
          return (
            <Input
              key={index}
              type={field.type}
              value={formDetails[field.category]}
              placeholder={field.placeholder}
              onChange={e => onFormUpdate(field.category, e.target.value)}
            />
          );
        }
      })}
    </>
  );
};

export default Form;
