import "./Navbar.css";
import Logo from "../../assets/logo.png";
import ArrowIcon from "../../assets/arrow_icon.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={Logo} alt="Navbar Logo" className="logo" />

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav__right">
        <select>
          <option value="usd">USD</option>
          <option value="ngn">NGN</option>
          <option value="eur">EUR</option>
        </select>

        <button>
          Sign up <img src={ArrowIcon} alt="Arrow icon" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
