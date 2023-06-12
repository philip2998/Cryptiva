import protection from '../../assets/img/protection.jpg';
import { protectionImgTitle, protectionImgDescription } from './text';

const ProtectionPicture = () => {
  return (
    <div className="prot-picture d-flex flex-wrap">
      <div className="col d-flex flex-wrap">
        <div className="opportunities w-100">
          <div className="opportunity-box h-100 d-flex flex-wrap">
            <div className="main-pic position-relative d-flex flex-wrap">
              <img
                className="img-fluid d-flex flex-wrap rounded opacity-50"
                src={protection}
                alt="Protection"
              ></img>
              <div className="position-absolute opportunity-caption">
                <div className="w-40 h-30 rounded py-4 px-4 d-flex flex-wrap">
                  <h1 className="fs-5 fw-bold w-100 d-flex flex-wrap">
                    {protectionImgTitle}
                  </h1>
                  <p className="fs-xs w-100 pe-4 d-flex flex-wrap">
                    {protectionImgDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectionPicture;
