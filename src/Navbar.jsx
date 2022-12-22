import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [showbg, setshowbg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshowbg(true);
      } else {
        setshowbg(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${showbg && "nav_show"}`}>
      <img
        className="img_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="img_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Username"
      />
    </div>
  );
}

export default Navbar;
