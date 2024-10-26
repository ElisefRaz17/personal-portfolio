import React from "react";

function FigmaUI() {
  const figmaUrl =
    "https://embed.figma.com/board/3scGs06hhFK7Ut8Lv69w3a/SSO-Reporting-Tools-Wireframes?node-id=0-1&embed-host=share";
  const figma1Url =
    "https://embed.figma.com/design/jqzpXMTTJ7ssobg0sn1RDd/Mission-Control-Wireframes?embed-host=share";
  const figma2Url =
    "https://embed.figma.com/design/a0YGoALkba6B78CoSY2Mt4/Institution-Form?embed-host=share";
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
        <iframe
          title="Figma Project"
          src={figmaUrl}
          width="300"
          height="200"
          allowFullScreen
        />
      </span>

      <span
        className="flex flex-col md:max-w-2xl max-w-md p-4"
        id="mission-control"
      >
        <h4 className="font-bold">Mission Control Wireframes</h4>
        <p>
          This application uses React for the frontend and purpose is to keep
          status of different API flows.
        </p>
        <iframe
          title="Mission Control Project"
          src={figma1Url}
          width="300"
          height="200"
          allowFullScreen
        />
      </span>
      <span className="flex flex-col md:max-w-2xl max-w-md p-4" id="institution">
        <h4 className="font-bold">Instituion Test Pad</h4>
        <p>
          Thi application utilized Next.js fron the frontend, SpringBoot for the
          backend and SAML to replicate a Single Sign-on Flow
        </p>
        <iframe
          title="Institution Test Pad Project"
          src={figma2Url}
          width="300"
          height="200"
          allowFullScreen
        />
      </span>
    </div>
  );
}

export default FigmaUI;
