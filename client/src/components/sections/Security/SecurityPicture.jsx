import securityMan from '../../../assets/img/security-man.jpg';

const SecurityPicture = () => {
  return (
    <div className="d-flex flex-wrap">
      <img
        className="img-fluid rounded opacity-50"
        src={securityMan}
        alt="Man at security work"
      ></img>
    </div>
  );
};

export default SecurityPicture;
