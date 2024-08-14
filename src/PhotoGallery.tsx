import ReactTabs from "./assets/ReactTabs.jpg";
import ReactChips from "./assets/ReactChips.jpg";
import React from "react";


const PhotoGallery = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", width:'80%', flexWrap:'wrap', justifyContent:'center', gap:'0.2rem'}}>
      {/* <div style={{gap:'2rem',display:"flex",paddingTop:"50px",flexDirection:'column'}}> */}
        <img src={ReactTabs} alt="React Tabs" style={{width:'50%'}} />
        <img src={ReactChips} alt="React Chips" style={{width:'50%'}}/>
      {/* </div> */}
      <aside>These are screenshots of the React Typescript components in production environment</aside>
    </div>
  );
};

export default PhotoGallery;
