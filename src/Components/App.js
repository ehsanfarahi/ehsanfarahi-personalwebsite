import "../styles/index.css";
import EhsanFarahiStarterName from "./EhsanFarahiStarterName";
import Header from "./Header";
import MyAccount from "./MyAccount";
import UpdateUser from "./UpdateUser";
import MyJourney from "./MyJourney";
import EducationalBackground from "./EducationalBackground";
import MyWorkAndProjects from "./MyWorkAndProjects";
import GeneralInfo from "./GeneralInfo";
import Footer from "./Footer";

import { IoIosCheckmarkCircle } from "react-icons/io";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";

// React Icons
import { HiArrowUp } from "react-icons/hi";

function App() {
  const [arrowUp, setArrowUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        document.querySelector(".top-menu").style.borderBottom =
          "2px solid black";
      } else {
        document.querySelector(".top-menu").style.borderBottom = "none";
      }

      if (window.scrollY > 500) {
        setArrowUp(true);
      } else {
        setArrowUp(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <EhsanFarahiStarterName />
      <div className="main-wrapper">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/my-account/:id" element={<MyAccount />} />
            <Route path="/update-user/:id" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>

        <MyJourney />
        <EducationalBackground />
        <MyWorkAndProjects />
        <GeneralInfo />
        <Footer />
      </div>

      {arrowUp ? (
        <div onClick={goToTop}>
          <button className="top-arrow" type="button">
            <HiArrowUp />
          </button>
        </div>
      ) : (
        false
      )}

      <div className="subscription-message">
        <p>
          <IoIosCheckmarkCircle className="check-circle" /> Subscribed
          successfully!
        </p>
      </div>
    </div>
  );
}

export default App;
