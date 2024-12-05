
import './Navbar.css';

const Navbar = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">Xcars</h2>
        <ul className="navbar-links">
          <li>
            <a href="#gallery-section" onClick={(e) => handleScroll(e, 'gallery-section')}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#overview-section" onClick={(e) => handleScroll(e, 'overview-section')}>
              Overview
            </a>
          </li>
          <li>
            <a href="#calculator-section" onClick={(e) => handleScroll(e, 'calculator-section')}>
              Calculator
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
