import Card from "./Card";
import "./Properties.css";
import arrowRight from "./assets/arrow-right.svg";

export default function Properties() {
  return (
    <div className="properties-container">
      <div className="properties-section-description">
        <div className="properties-text-container">
          <span className="eyebrow">Explore Prime Opportunities</span>
          <h2>Find Your Dream Investment in the City’s Heart</h2>
          <p>
            Discover a curated selection of Pakistan’s most promising real
            estate projects, designed to deliver exceptional returns. From
            residential havens to commercial ventures, each property is chosen
            with your investment goals in mind. Start building your portfolio
            today with opportunities you can trust.
          </p>
        </div>
        <div className="properties-cta-container">
          <div>
            <button>
              Inquire for your perfect home{" "}
              <img src={arrowRight} alt="Button icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="property-cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
