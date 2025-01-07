import "./AboutUs.css";
import aghaazMap from "./assets/aghaaz-map.svg";

export default function AboutUs() {
  return (
    <div className="aboutUs-container">
      <div>
        <span className="eyebrow">Your Gateway to Lucrative Investments</span>
        <h2>Empowering Pakistanis to Build a Prosperous Future</h2>
        <p>
          At Aghaaz Real Estate, we specialize in connecting non-resident
          Pakistanis with high-potential investment opportunities in Pakistan’s
          thriving real estate market.
        </p>
        <p>
          With a commitment to transparency, innovation, and growth, we turn
          your investment goals into reality. Trust us to guide you toward
          secure and strategic investments that promise exceptional returns
        </p>
      </div>
      <img
        src={aghaazMap}
        alt="We aim to help you find investment oppurtunities in realestate all over pakistan"
        className="aghaazMap"
      />
    </div>
  );
}
