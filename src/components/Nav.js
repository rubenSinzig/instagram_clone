import logo from "../images/instagram-logo.png";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      {/* Logo */}
      <img
        href="#"
        className="insta-logo"
        src={logo}
        alt="Instagram Logo"
      ></img>

      {/* Searchbar */}
      <div className="nav-searchbar">
        {/* change later to Font Awesome */}
        <span>🔍</span>
        <input type="search" placeholder="Search"></input>
      </div>

      {/* Login */}
      <div className="nav-login">
        <button>Log In</button>
        <p>
          <a href="#"> Sign Up </a>
        </p>
      </div>
    </div>
  );
};
export default Nav;
