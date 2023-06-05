import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLink from './NavLink';
import logo from '../../assets/img/logo.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDrowpdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const onUpdateActiveLink = value => setActiveLink(value);
  const handleDropdownOpen = () => setIsDrowpdownOpen(true);
  const handleDropdownClose = () => setIsDrowpdownOpen(false);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link, index) =>
                link.label === 'Services' ? (
                  <NavDropdown
                    key={index}
                    title={link.label}
                    id="nav-bar-dropdown"
                    className="navbar-link service-link"
                    show={isDropdownOpen}
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <NavDropdown.Item
                      className="dropdown-box bg-white rounded px-4"
                      href="#services"
                    >
                      <span className="dropwdown-text mb-0">
                        Infrastructure Modernization
                      </span>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavLink
                    key={index}
                    id={index}
                    activeLink={activeLink}
                    onUpdateActiveLink={onUpdateActiveLink}
                    href={link.href}
                    className="navbar-link"
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
