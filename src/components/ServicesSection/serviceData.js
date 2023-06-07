import dataSecurity from '../../assets/img/data-security.png';
import net from '../../assets/img/net.png';
import locker from '../../assets/img/locker.png';
import dataBase from '../../assets/img/database.png';
import highQuality from '../../assets/img/highQuality.svg';
import effectiveProtection from '../../assets/img/effectiveProtection.svg';
import { serviceText } from './text';

const serviceData = [
  {
    imageSrc: net,
    title: 'Network Security',
    description: serviceText,
  },
  {
    imageSrc: dataBase,
    title: 'Database Security',
    description: serviceText,
  },
  {
    imageSrc: effectiveProtection,
    title: 'Web Security',
    description: serviceText,
  },
  {
    imageSrc: locker,
    title: 'Locker Security',
    description: serviceText,
  },
  {
    imageSrc: dataSecurity,
    title: 'Data Security',
    description: serviceText,
  },
  {
    imageSrc: highQuality,
    title: 'Cloud Security',
    description: serviceText,
  },
];

export default serviceData;
