import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Figure = ({ icon, number, symbol, title }) => {
  return (
    <div className="d-flex flex-wrap py-3 px-3 text-center">
      <div className="fun-fact-innex">
        <div className="icon-animation">
          <FontAwesomeIcon className="fs-1 m-0 p-0" icon={icon} />
        </div>
        <div className="content">
          <div className="number-wrapper">
            <span className="number loaded fs-2 fw-bold">{number}</span>
            <sup className="super fs-4">{symbol}</sup>
          </div>
          <p className="title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Figure;
