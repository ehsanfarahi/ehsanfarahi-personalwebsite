import { useEffect } from "react";

import "../styles/index.css";

const EhsanFarahiStarterName = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".l1").style.display = "inline";
    }, 500);
    setTimeout(() => {
      document.querySelector(".l2").style.display = "inline";
    }, 750);
    setTimeout(() => {
      document.querySelector(".l3").style.display = "inline";
    }, 1000);
    setTimeout(() => {
      document.querySelector(".l4").style.display = "inline";
    }, 1250);
    setTimeout(() => {
      document.querySelector(".l5").style.display = "inline";
    }, 1500);
    setTimeout(() => {
      document.querySelector(".l6").style.display = "inline";
    }, 1750);
    setTimeout(() => {
      document.querySelector(".l7").style.display = "inline";
    }, 2000);
    setTimeout(() => {
      document.querySelector(".l8").style.display = "inline";
    }, 2250);
    setTimeout(() => {
      document.querySelector(".l9").style.display = "inline";
    }, 2500);
    setTimeout(() => {
      document.querySelector(".l10").style.display = "inline";
    }, 2750);
    setTimeout(() => {
      document.querySelector(".l11").style.display = "inline";
    }, 3000);

    setTimeout(() => {
      document.querySelector(".main-wrapper").style.display = "block";
      document.querySelector(".fade-out").style.display = "none";
    }, 3500);
  }, []);
  return (
    <div className="fade-out">
      <div className="ehsan-farahi-border"></div>
      <p className="ehsan-farahi">
        <span className="l1">e</span>
        <span className="l2">h</span>
        <span className="l3">s</span>
        <span className="l4">a</span>
        <span className="l5">n</span> <span className="l6">f</span>
        <span className="l7">a</span>
        <span className="l8">r</span>
        <span className="l9">a</span>
        <span className="l10">h</span>
        <span className="l11">i</span>
      </p>
    </div>
  );
};

export default EhsanFarahiStarterName;
