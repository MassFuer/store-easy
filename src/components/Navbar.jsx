import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

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
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Orders
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
              <Link
                to="/profile"
                className={({ isActive }) =>
                  `user-profile ${isActive ? "active" : ""}`
                }
              >
                <span className="user-icon">👤</span>
                <span className="user-name">
                  {user.firstName || user.username}
                </span>
              </Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/register" className="register-link">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
