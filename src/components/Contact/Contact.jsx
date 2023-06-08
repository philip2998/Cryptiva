import GetTouch from './GetTouch';
import Form from './Form';

const Contact = () => {
  return (
    <section className="contactus mt-5" id="connect">
      <div className="container position-relative">
        <div className="row d-flex flex-wrap">
          <div className="col-sm-12 col-md-6">
            <GetTouch />
          </div>
          <div className="col-sm-12 col-md-6">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
