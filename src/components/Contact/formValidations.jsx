export const validateForm = (formFields, formDetails) => {
  let isValid = true;
  for (const field of formFields) {
    if (!formDetails[field.category]) {
      isValid = false;
      break;
    }
    if (field.type === 'email' && !validateEmail(formDetails[field.category])) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

export const validateEmail = email => {
  // A simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
