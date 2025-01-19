import logo from "./assets/aghaaz-logo.svg";
import heroImg from "./assets/hero-img.jpg";
import fileDowload from "./assets/file-download.svg";
import contactIcon from "./assets/contact-icon.svg";
import "./HeroMobile.css";

export default function HeroMobile() {
  return (
    <div>
      <div className="mobile-main-container">
        <div className="mobile-logo">
          <img src={logo} alt="Aghaaz Logo" />
        </div>
        <div className="mobile-hero-text">
          <span className="eyebrow mobile-eyebrow">Building Your Dreams</span>
          <h1>Guiding your path to A new home in Karachi</h1>
        </div>
        <div className="mobile-hero-image">
          <img src={heroImg}></img>
          <div className="hero-prop-details">
            <p>International Developer with over 1600 properties</p>
            <p>From PKR 6.7 CR with yields up to 10% per annum</p>
          </div>
        </div>
        <div className="mobile-btn-container">
          <div className="mobile-contact-btn">
            <img src={contactIcon} alt="contact-us-icon" />
            <span>Contact Us</span>
          </div>
          <div className="mobile-catalog-download">
            <div onClick={() => console.log("Hello")}>
              <span>Catalog Download</span>
              <img src={fileDowload} alt="file dowload icon"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
