import Input from '../../common/formElements/Input';
import Textarea from '../../common/formElements/Textarea';
import formFields from './formFields';

const Form = ({ formDetails, onFormUpdate, errors }) => {
  return (
    <>
      {formFields.map((field, index) => {
        if (field.type === 'textarea') {
          return (
            <div key={index} className="form-group mb-3">
              <Textarea
                key={index}
                value={formDetails[field.category]}
                placeholder={field.placeholder}
                onChange={e => onFormUpdate(field.category, e.target.value)}
              />
              {errors[field.category] && (
                <p className="text-danger">{errors[field.category]}</p>
              )}
            </div>
          );
        } else {
          return (
            <div key={index} className="form-group mb-3">
              <Input
                key={index}
                type={field.type}
                value={formDetails[field.category]}
                placeholder={field.placeholder}
                onChange={e => onFormUpdate(field.category, e.target.value)}
                errors={errors}
              />
              {errors[field.category] && (
                <p className="text-danger">{errors[field.category]}</p>
              )}
            </div>
          );
        }
      })}
    </>
  );
};

export default Form;
