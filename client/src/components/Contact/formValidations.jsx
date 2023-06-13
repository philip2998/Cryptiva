export const isValidEmail = email => {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = formDetails => {
  const { name, email, subject, message } = formDetails;
  const errors = {};

  if (!name.trim()) {
    errors.name = 'Name is required';
  }

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};
