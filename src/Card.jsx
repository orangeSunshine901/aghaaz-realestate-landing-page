import "./Card.css";
import propImg from "./assets/prop-1.png";

export default function Card() {
  return (
    <div>
      <div className="card">
        <div>
          <img className="card-img" src={propImg} alt="" />
        </div>
        <div className="card-details">
          <h4>Modern Rustic Estate</h4>
          <div className="card-text">
            <div>
              <p>
                Discover a curated selection of Pakistan’s most promising real
                estate projects.
              </p>
            </div>
            <div>
              <span>PKR 2.5 Cr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
