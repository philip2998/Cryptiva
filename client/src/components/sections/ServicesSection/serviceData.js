import dataSecurity from '../../../assets/img/data-security.png';
import net from '../../../assets/img/net.png';
import locker from '../../../assets/img/locker.png';
import dataBase from '../../../assets/img/database.png';
import highQuality from '../../../assets/img/highQuality.svg';
import effectiveProtection from '../../../assets/img/effectiveProtection.svg';
import {
  serviceOne,
  serviceTwo,
  serviceThree,
  serviceFour,
  serviceFive,
  serviceSix,
} from './text';

const serviceData = [
  {
    imageSrc: net,
    title: 'Network Security',
    description: serviceOne,
  },
  {
    imageSrc: dataBase,
    title: 'Database Security',
    description: serviceTwo,
  },
  {
    imageSrc: effectiveProtection,
    title: 'Web Security',
    description: serviceThree,
  },
  {
    imageSrc: locker,
    title: 'Locker Security',
    description: serviceFour,
  },
  {
    imageSrc: dataSecurity,
    title: 'Data Security',
    description: serviceFive,
  },
  {
    imageSrc: highQuality,
    title: 'Cloud Security',
    description: serviceSix,
  },
];

export default serviceData;
