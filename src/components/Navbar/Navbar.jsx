import { useState } from 'react';
import "./navbar.css";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/authContext';

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const logoutBtn = () => {
    // logout();
    navigate("/login");

  }

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) {
      return;
    }

    const touchEndX = e.touches[0].clientX;
    const touchDiffX = touchEndX - touchStartX;

    if (touchDiffX > 50) { // Adjust the threshold as needed
      setIsMobileMenuOpen(false);
    }

    touchStartX = null;
  };

  let touchStartX = null;

  const renderNavbarItems = () => {
    switch (location.pathname) {
      case "/":
        return (
          <header className="dashboard-header">
            <p className="logo">
              <NavLink to="/">Rentals Co.</NavLink>
            </p>

            <nav>
              <div className="nav-links">
                <NavLink to="/about">FAQ</NavLink>
              </div>
              <div className="login-link">
                <NavLink to="/login">List your property</NavLink>
              </div>
            </nav>
          </header>
        );
      case '/about':
        return null;
      case "/admin":
        return (
          <>
            <header>
              <div className="container">
                <NavLink to="/admin">Rental Co.</NavLink>
                <nav>
                  <NavLink to="#">Listing</NavLink>
                  <NavLink to="#">Trips</NavLink>
                  <NavLink to="#">Inbox</NavLink>
                  <NavLink to="#">Help</NavLink>
                  <NavLink to="#"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt='profile_image' className="profile_image"/></NavLink>
                </nav>
                <button className={`hamburger ${isMobileMenuOpen ? 'is-active' : ''}`} onClick={toggleMobileMenu}>
                  <div className="bar"></div>
                </button>
              </div>
            </header>
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'is-active' : ''}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
              <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
                Close
              </button>
              <NavLink to="#" onClick={logoutBtn}>Logout</NavLink>
              <NavLink to="/dashboard/settings">Listing</NavLink>
              <NavLink to="/dashboard/settings">Trips</NavLink>
              <NavLink to="/dashboard/settings">Inbox</NavLink>
              <NavLink to="/dashboard/settings">Help</NavLink>
            </nav>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav>
      {renderNavbarItems()}
    </nav>
  );
};
