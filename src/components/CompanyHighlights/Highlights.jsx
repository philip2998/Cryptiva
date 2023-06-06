import Figure from './Figure';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Highlights = () => {
  const figuresData = [
    {
      icon: faGlobe,
      number: '3452',
      symbol: '+',
      title: 'Cybersecurity Projects',
    },
    {
      icon: faHandshakeAngle,
      number: '1458',
      symbol: '+',
      title: 'Clients Protection',
    },
    {
      icon: faLock,
      number: '100',
      symbol: '%',
      title: 'Service Guarantee',
    },
    {
      icon: faPeopleGroup,
      number: '85',
      symbol: '+',
      title: 'Team Experts',
    },
  ];

  return (
    <section className="container highlights mt-5">
      <div className="row">
        <div className="col">
          <div className="p-3 d-flex flex-wrap">
            <section className="container key-figures rounded z-1 mb-0 pt-3 pb-6 px-0">
              <div className="row d-flex flex-wrap figure-row">
                {figuresData.map((figure, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <Figure
                      icon={figure.icon}
                      number={figure.number}
                      symbol={figure.symbol}
                      title={figure.title}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
