import React from "react";
import "./FloatingIcon.css";

function FloatingIcon() {
  return (
    <div>
      <a href="#top">
        <div className="floating">
          <i id="flo" className="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  );
}

export default FloatingIcon;
