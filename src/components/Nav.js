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
      <input type="search" placeholder="Search"></input>

      {/* Login */}
      <button>Log In</button>
      <p>
        <a href="#"> Sign Up </a>
      </p>
    </div>
  );
};
export default Nav;
