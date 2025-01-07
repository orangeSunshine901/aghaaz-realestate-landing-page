import "./ContactUs.css";
import contactImage from "./assets/contact-picture.jpg";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactImage} alt="" />
      </div>
      <div className="form-container">
        <span className="eyebrow">Let’s Connect</span>
        <h2>Your Investment Journey Starts Here</h2>
        <form>
          <label>
            First Name<input></input>
          </label>
          <label>
            Last Name<input></input>
          </label>

          <label>
            I am intersted in<input></input>
          </label>

          <label>
            Details<input></input>
          </label>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
