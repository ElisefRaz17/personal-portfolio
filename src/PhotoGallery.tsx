import React from "react";
import ReactTabs from "./assets/ReactTabs.jpg";
import ReactChips from "./assets/ReactChips.jpg";


const PhotoGallery = () => {
  return (
    <div>
      <div style={{gap:'2rem',display:"flex",paddingTop:"50px",flexDirection:'column'}}>
        <img src={ReactTabs} alt="React Tabs" />
        <img src={ReactChips} alt="React Chips" />
      </div>
      <aside>These are screenshots of the React Typescript components in production environment</aside>
    </div>
  );
};

export default PhotoGallery;
