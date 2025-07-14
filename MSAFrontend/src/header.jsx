import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/role");
  };

  return (
    <header className="header">
      <div className="logo-div">
        <img
          className="logo"
          src="https://res.cloudinary.com/dsdcaxwpg/image/upload/v1730001554/logo_msa_e2z3fj.png"
          alt="logo"
        />
      </div>
      <nav className="nav">
        <Link to="/body" className="link">
          Home
        </Link>
        <Link to="/body/about" className="link">
          About
        </Link>
        <Link to="/body/contact" className="link">
          Contact Us
        </Link>
        <Link to="/body/orders" className="link">
          My Orders
        </Link>

        <button onClick={handleLogout} className="login">
          Logout
        </button>

        <Link to="/body/cart" className="cart-link">
          <div className="cart-icon">
            <FaShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
