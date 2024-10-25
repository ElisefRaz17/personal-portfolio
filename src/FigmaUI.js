import React from "react";

function FigmaUI() {
  const figmaUrl =
    "https://embed.figma.com/board/3scGs06hhFK7Ut8Lv69w3a/SSO-Reporting-Tools-Wireframes?node-id=0-1&embed-host=share";
  return (
    <div className="flex flex-col w-full">
      <span>
        <h1>UI/UX Design Projects</h1>
        <h4>SSO Reporting Tools Wireframes</h4>
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
    </div>
  );
}

export default FigmaUI;
