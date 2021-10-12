import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright">©BrijSiyag-2021</div>
      <a
        href="https://github.com/brijsiyag"
        target="_blank"
        className="github-link"
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default Footer;
