import Figure from './Figure';
import Reveal from '../utils/Reveal';
import figuresData from './figuresData';

const Highlights = () => {
  return (
    <Reveal animationType="fadeInUp">
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
    </Reveal>
  );
};

export default Highlights;
