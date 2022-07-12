/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// export default ScrollTop;
import React, { useState, useEffect } from "react";
import style from "../styles/scroll.module.css";
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
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
    <div className="top-to-btm">
      {showTopBtn && (
        <img
          src="../Images/scrollUp.png"
          className={style.iconPosition}
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
