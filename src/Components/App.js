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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="35"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 -2 16 22"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </button>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default App;
