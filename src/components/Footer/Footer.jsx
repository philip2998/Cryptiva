import FooterLink from './FooterLink';
import FooterBorder from './FooterBorder';
import logo from '../../assets/img/logo.svg';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <section className="footer px-0 pb-3">
      <div className="d-flex me-auto ms-auto">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <footer className="row footer-section d-flex flex-wrap mb-3">
                <div className="col-md-3 align-content-center align-items-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="img-fluid col-md-4 mb-3 mb-md-0"
                  ></img>
                </div>
                <div className="col-md-6 align-content-center align-items-center">
                  <ul className="nav justify-content-evenly">
                    <FooterLink title="Home" />
                    <FooterLink title="About Us" />
                    <FooterLink title="Services" />
                    <FooterLink title="Contact" />
                  </ul>
                </div>
                <div className="col-md-3 d-flex">
                  <SocialIcon icon={faFacebookF} href="#" />
                  <SocialIcon icon={faTwitter} href="#" />
                  <SocialIcon icon={faInstagram} href="#" />
                  <SocialIcon icon={faLinkedin} href="#" />
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <FooterBorder />
    </section>
  );
};

export default Footer;
