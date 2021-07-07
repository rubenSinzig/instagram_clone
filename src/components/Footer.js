import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* short links */}
      <div className="footer-wrapper-short-links">
        <div className="footer-short-links">
          <a href="https://about.instagram.com/">About</a>
        </div>
        <div className="footer-short-links">
          <a href="https://about.instagram.com/blog">Blog</a>
        </div>
        <div className="footer-short-links">
          <a href="https://about.instagram.com/about-us/careers">Jobs</a>
        </div>
        <div className="footer-short-links">
          <a href="https://help.instagram.com/">Help</a>
        </div>
        <div className="footer-short-links">
          <a href="https://developers.facebook.com/docs/instagram">API</a>
        </div>
        <div className="footer-short-links">
          <a href="https://help.instagram.com/519522125107875">Privacy</a>
        </div>
        <div className="footer-short-links">
          <a href="https://help.instagram.com/581066165581870">
            Impressum/Terms/NetzDG
          </a>
        </div>
        <div className="footer-short-links">
          <a href="https://www.instagram.com/directory/profiles/">
            Top Accounts
          </a>
        </div>
        <div className="footer-short-links">
          <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
        </div>
        <div className="footer-short-links">
          <a href="https://www.instagram.com/explore/locations/">Locations</a>
        </div>
      </div>

      {/* language and copyright */}
      <div className="footer-wrapper-copyright">
        <select value="language">
          <option value="Eng">English</option>
          <option value="Deu">Deutsch</option>
          <option value="Esp">Español</option>
          <option value="Ita">Italiano</option>
          <option value="Fra">Français</option>
          <option value="Por">Português</option>
        </select>
      </div>
    </div>
  );
};
export default Footer;
