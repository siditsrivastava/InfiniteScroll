import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>    <div className="header-section container-fluid">
      <div className="sub-header-section container">
        <div className="company-logo">
          <h1>
            aDMe
          </h1>
        </div>

        <div className="category container">
          <ul>
           <h5 ><li className="title"> Find Your Accurate and Favourite Picture</li></h5>
          </ul>
        </div>
      </div>
    </div>

    <div className="header-image container">
      <img src={"https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI"} alt="NOT_IMAGE_FOUND"/>
        </div>

    </>
  );
};

export default Header;
