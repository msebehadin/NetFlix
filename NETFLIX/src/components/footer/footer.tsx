import React from "react";
import "./footer.css";
const footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="widget-wrapper">
        <div className="first-widget">
          <ul>
            <li className="list-item">Audio and subtitles</li>
            <li className="list-item">Media Center</li>
            <li className="list-item">Privacy</li>
            <li className="list-item">Contact</li>
          </ul>
        </div>
        <div className="second-widget">
          <ul>
            <li className="list-item">Help Center</li>
            <li className="list-item">cookie </li>
            <li className="list-item">jobs</li>
          </ul>
        </div>
        <div className="third-widget">
          <ul>
            <li className="list-item">Audio description</li>
            <li className="list-item">Investor Relation</li>
            <li className="list-item">Legal Notice</li>
          </ul>
        </div>
        <div className="forth-widget">
          <ul>
            <li className="list-item">GIft card</li>
            <li className="list-item"> term of use </li>
            <li className="list-item"> corporation information</li>
          </ul>
        </div>
      </div>
      <button className="button-service">Service Code</button>
      <p className="copyright">@copyright 2020 Vanilacodes, Inc.</p>
    </div>
  );
};

export default footer;
