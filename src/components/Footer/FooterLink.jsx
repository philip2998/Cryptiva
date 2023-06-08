const FooterLink = ({ title }) => {
  return (
    <li className="nav-item">
      <a href="home" className="nav-link px-2 footer-link">
        {title}
      </a>
    </li>
  );
};

export default FooterLink;
