import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon, href }) => {
  return (
    <div className="social-icon-box d-flex">
      <span className="d-inline-block rounded-circle">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} className="soc-icon" />
        </a>
      </span>
    </div>
  );
};

export default SocialIcon;
