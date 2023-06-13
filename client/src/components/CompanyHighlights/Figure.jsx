import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

const Figure = ({ icon, number, symbol, title }) => {
  return (
    <div className="py-3 px-3 text-center">
      <div className="fun-fact-inner">
        <div className="icon-animation">
          <FontAwesomeIcon className="fs-1 m-0 p-0" icon={icon} />
        </div>
        <div className="content">
          <div className="number-wrapper">
            <CountUp
              start={0}
              end={number}
              duration={3}
              separator=","
              className="number fs-2 fw-bold"
            />
            <sup className="super fs-4">{symbol}</sup>
          </div>
          <p className="title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Figure;
