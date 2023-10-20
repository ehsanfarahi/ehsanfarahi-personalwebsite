import { useEffect } from "react";

// React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    document.querySelector(".contact-container").classList.add("displayNone");
  });

  function closeContact() {
    document.querySelector(".contact-container").classList.add("displayNone");
  }

  return (
    <div className="contact-container">
      <AiOutlineCloseCircle onClick={closeContact} className="form-close-btn" />
      <div className="contact-container-content">
        <div className="formbold-main-wrapper">
          <div className="w-full">
            <div className="formbold-form-wrapper">
              <div className="formbold-form-header">
                <h3>Let's chat!</h3>
              </div>
              <form className="formbold-chatbox-form">
                <div className="formbold-mb-5">
                  <label htmlFor="name" className="formbold-form-label">
                    {" "}
                    Your Name{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="email" className="formbold-form-label">
                    {" "}
                    Email Address{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="message" className="formbold-form-label">
                    {" "}
                    Message{" "}
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Explain you queries"
                    className="formbold-form-input"
                  ></textarea>
                </div>

                <div>
                  <button className="formbold-btn w-full">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
