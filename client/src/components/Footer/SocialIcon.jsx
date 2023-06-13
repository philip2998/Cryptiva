import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon, href }) => {
  return (
    <div className="social-icon-box d-flex align-items-center justify-content-center">
      <a
        className="d-flex align-items-center justify-content-center rounded-circle"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} className="soc-icon" />
      </a>
    </div>
  );
};

export default SocialIcon;
