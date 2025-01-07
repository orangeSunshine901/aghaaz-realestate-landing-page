import logo from "./assets/aghaaz-logo.svg";
import heroImg from "./assets/hero-img.jpg";
import fileDowload from "./assets/file-download.svg";
import contactIcon from "./assets/contact-icon.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <div>
      <div className="main-container">
        <div className="left-main">
          <img
            className="logo"
            src={logo}
            width="100px"
            alt="aghaaz-real-estate-logo"
          />
          <div className="hero-text">
            <span className="eyebrow eyebrow-main">Building Your Dreams</span>
            <h1>Guiding your path to A new home in Karachi</h1>
          </div>
          <div className="contact-btn">
            <img src={contactIcon} alt="contact-us-icon" />
            <span>Contact Us</span>
          </div>
        </div>
        <div className="right-main">
          <img
            src={heroImg}
            alt="Emaar property in Karachi along the sea"
            className="hero-img"
          />
          <div className="overlay-container">
            <h6 className="overlay-text">
              International Developer with over 1600 properties
            </h6>
            <h6 className="overlay-text">
              From PKR 6.7 CR with yields up to 10% per annum
            </h6>
          </div>
          <div className="catalog-download">
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
