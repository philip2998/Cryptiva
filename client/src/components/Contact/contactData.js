import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { adressName, adress, phoneNumber, email } from './text';

const contactData = [
  {
    icon: faHouse,
    title: adressName,
    description: adress,
  },
  {
    icon: faPhoneVolume,
    title: 'Call Us',
    description: phoneNumber,
  },
  {
    icon: faEnvelope,
    title: 'Email Address',
    description: email,
  },
];

export default contactData;
