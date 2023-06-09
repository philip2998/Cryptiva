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
  const icons = [
    { icon: faFacebookF, href: '#' },
    { icon: faTwitter, href: '#' },
    { icon: faInstagram, href: '#' },
    { icon: faLinkedin, href: '#' },
  ];
  const links = [
    { title: 'Home' },
    { title: 'About Us' },
    { title: 'Services' },
    { title: 'Contact' },
  ];
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
                    {links.map((link, index) => {
                      return <FooterLink key={index} title={link.title} />;
                    })}
                  </ul>
                </div>
                <div className="col-md-3 d-flex">
                  {icons.map((icon, index) => {
                    return (
                      <SocialIcon
                        key={index}
                        icon={icon.icon}
                        href={icon.href}
                      />
                    );
                  })}
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
