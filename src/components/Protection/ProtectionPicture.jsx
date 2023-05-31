import protection from "../../assets/img/protection.svg";

const ProtectionPicture = () => {
  return (
    <div className="container prot-picture">
      <div className="row">
        <div className="position-relative">
          <img src={protection} alt="Protection"></img>
          <div className="position-absolute">
            <h4>We Are Open For Opportunities!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectionPicture;
