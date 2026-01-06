import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const { user, logout } = useAuth();

  const menuItems = [
    {
      path: "/admin",
      icon: "📊",
      label: "Dashboard",
      exact: true,
    },
    {
      path: "/admin/products",
      icon: "📦",
      label: "Products",
    },
    {
      path: "/admin/orders",
      icon: "🛒",
      label: "Orders",
    },
    {
      path: "/admin/inventory",
      icon: "📋",
      label: "Inventory",
    },
    {
      path: "/admin/stock-orders",
      icon: "🚚",
      label: "Stock Orders",
    },

    // {
    //   path: "/admin/customers",
    //   icon: "👥",
    //   label: "Customers",
    // },
  ];

  return (
    <aside className="admin-sidebar">
      {/* Logo/Brand */}
      {/* <div className="sidebar-header">
        <h2 className="sidebar-logo">👟 ShoeEasy</h2>
        <span className="sidebar-subtitle">Admin Panel</span>
      </div> */}

      {/* User Info */}
      <div className="sidebar-user">
        <div className="user-avatar">{user?.firstName?.charAt(0) || "A"}</div>
        <div className="user-info">
          <span className="user-name">
            {user?.firstName} {user?.lastName}
          </span>
          <span className="user-role">Administrator</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      {/* <div className="sidebar-footer">
        <NavLink to="/" className="nav-link back-to-store">
          <span className="nav-icon">🏪</span>
          <span className="nav-label">Back to Store</span>
        </NavLink>
        <button className="logout-btn" onClick={logout}>
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Logout</span>
        </button>
      </div> */}
    </aside>
  );
};

export default AdminSidebar;
