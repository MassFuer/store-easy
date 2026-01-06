import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = ({ cartItemCount = 0 }) => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <span className="logo-icon">👟</span>
            <span className="logo-text">StoreEasy</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Brands
            </NavLink>
          </li>
          {isAdmin && (
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Admin
              </NavLink>
            </li>
          )}
        </ul>

        {/* Navbar Actions */}
        <div className="navbar-actions">
          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `cart-link ${isActive ? "active" : ""}`
            }
          >
            <span className="cart-icon">🛒</span>
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </NavLink>

          {isAuthenticated ? (
            <div className="user-menu">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `user-profile ${isActive ? "active" : ""}`
                }
              >
                <span className="user-icon">👤</span>
                <span className="user-name">{user?.firstName || "User"}</span>
              </NavLink>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `login-link ${isActive ? "active" : ""}`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `register-link ${isActive ? "active" : ""}`
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
