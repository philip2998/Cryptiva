const FooterLink = ({ href, label }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link px-2 footer-link">
        {label}
      </a>
    </li>
  );
};

export default FooterLink;
