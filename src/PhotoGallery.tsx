import ReactTabs from "./assets/ReactTabs.jpg";
import ReactChips from "./assets/ReactChips.jpg";
import React from "react";
import ProjectImage from "./assets/Computer-Girl.png";


const PhotoGallery = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", width:'80%', justifyContent:'center', gap:'0.2rem'}}>
      {/* <div style={{gap:'2rem',display:"flex",paddingTop:"50px",flexDirection:'column'}}> */}
       <img src={ProjectImage} alt="Girl with Computer" style={{width:'30%'}} />
        <img src={ReactTabs} alt="React Tabs" style={{width:'40%'}} />
        <img src={ReactChips} alt="React Chips" style={{width:'40%'}}/>
      {/* </div> */}
      <aside>These are screenshots of the React Typescript components in production environment</aside>
    </div>
  );
};

export default PhotoGallery;
