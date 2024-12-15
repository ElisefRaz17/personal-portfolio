import React from "react";
import file from "./assets/IT Resume as of September 2024.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./Resume.css";
import resume from "./assets/UpdatedResumeScreenshot.png";
import { Button } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className="flex flex-col items-center" id="resume">
      <div className={styles.pages}>
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-bold">My Resume</h1>
          <a
            href={file}
            download="ResumeDoc"
            target="_blank"
            className="bg-orange-700 rounded-md py-2 w-fit hover:bg-orange-500"
          >
            <Button style={{ color: "white", textAlign: "center" }}>
              Download PDF
            </Button>
          </a>
        </div>
        <div className="py-3">
          <img src={resume} alt="Resume" />
        </div>
      </div>
    </div>
    // <section className="bg-primary text-orange-950 px-5 py-32" id="resume">
    //   <div className="text-center text-black">
    //     <h2 className="text-4xl font-bold mb-5  pb-2">Resume</h2>

    //     <Document file={file}>
    //       <div className={styles.page}>
    //         <Page
    //           pageNumber={1}
    //           scale={10}
    //           renderAnnotationLayer={false}
    //           renderTextLayer={false}
    //         />
    //       </div>
    //     </Document>
    //   </div>
    // </section>
  );
}

export default Resume;
