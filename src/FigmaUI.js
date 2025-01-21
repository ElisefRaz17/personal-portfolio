import React from "react";
import ImageGallery from "react-image-gallery";
import "./FigmaUI.css";
function FigmaUI() {
  const images = [
    {
      original: require("./assets/login.png"),
      thumbnail: require("./assets/login.png"),
    },
    {
      original: require("./assets/managementTable.png"),
      thumbnail: require("./assets/managementTable.png"),
    },
    {
      original: require("./assets/listing.png"),
      thumbnail: require("./assets/listing.png"),
    },
    {
      original: require("./assets/editingView.png"),
      thumbnail: require("./assets/editingView.png"),
    },
  ];
  const missionImages = [
    {
      original: require("./assets/missionLogin.png"),
      thumbnail: require("./assets/missionLogin.png"),
    },
    {
      original: require("./assets/missionFlow.png"),
      thumbnail: require("./assets/missionFlow.png"),
    },
    {
      original: require("./assets/missionFlowStatus.png"),
      thumbnail: require("./assets/missionFlowStatus.png"),
    },{
      original: require("./assets/missionEnding.png"),
      thumbnail: require("./assets/missionEnding.png"),
    }
  ];
  const institutionImages = [
    {
      original: require("./assets/institutionLogin.png"),
      thumbnail: require("./assets/institutionLogin.png"),
    },
    {
      original: require("./assets/institutionLoginConfirm.png"),
      thumbnail: require("./assets/institutionLoginConfirm.png"),
    },
    {
      original: require("./assets/institutionLoginDropdown.png"),
      thumbnail: require("./assets/institutionLoginDropdown.png"),
    }
  ];

  return (
    <div className="flex flex-col w-full items-center">
      <span className="p-4">
        <h1 className="py-4">UI/UX Design Projects</h1>
        <p>
          Due to confidentiality of the data used in the original UI work, the
          data used in this project is mock data for viewability purposes.
        </p>
      </span>
      <span className="flex flex-col md:max-w-2xl max-w-md p-4">
        <h4 className="font-bold">SSO Reporting Tools Wireframes</h4>
        <p>
          This application was originally developed in Pearl and I maintained
          and developed the frontend of the application using Next.js with the
          backend being Springboot
        </p>
      </span>
      <div>
        <div style={{ width: "200", height: "200" }}>
          <ImageGallery items={images} />
        </div>
      </div>

      <span
        className="flex flex-col md:max-w-2xl max-w-md p-4"
        id="mission-control"
      >
        <h4 className="font-bold">Mission Control Wireframes</h4>
        <p>
          This application uses React for the frontend and purpose is to keep
          status of different API flows.
        </p>
        <div style={{ width: "200", height: "200" }}>
          <ImageGallery items={missionImages} />
        </div>
      </span>
      <span
        className="flex flex-col md:max-w-2xl max-w-md p-4"
        id="institution"
      >
        <h4 className="font-bold">Instituion Test Pad</h4>
        <p>
          Thi application utilized Next.js fron the frontend, SpringBoot for the
          backend and SAML to replicate a Single Sign-on Flow
        </p>
        <div style={{ width: "200", height: "200" }}>
          <ImageGallery items={institutionImages} />
        </div>
      </span>
    </div>
  );
}

export default FigmaUI;
