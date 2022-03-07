import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const settingChanger = (location) => {
  let footerPage;
  switch (location.pathname) {
    case "/":
      footerPage = "foot-con-top";
      break;
    case "/project":
      footerPage = "foot-con-project";
      break;
    case "/about":
      footerPage = "foot-con-about";
      break;
    case "/contact":
      footerPage = "foot-con-contact";
      break;
    default:
      break;
  }
  return footerPage;
};

function Footer() {
  const [footerPageClass, setFooterPageClass] = useState();
  let location = useLocation();

  useEffect(() => {
    setFooterPageClass(settingChanger(location));
  }, [location]);

  return (
    <footer className={`foot-con ${footerPageClass}`}>
      <p>&copy; Erika Hashizume, 2022 </p>
    </footer>
  );
}

export default Footer;
