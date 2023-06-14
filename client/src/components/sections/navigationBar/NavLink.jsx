import { Nav } from "react-bootstrap";

const NavLink = ({ activeLink, onUpdateActiveLink, href, children }) => {
  const handleClick = () => {
    onUpdateActiveLink(children);
  };

  return (
    <Nav.Link
      href={href}
      className={`navbar-link ${activeLink === children ? "active" : ""}`}
      onClick={handleClick}
    >
      {children}
    </Nav.Link>
  );
};

export default NavLink;
