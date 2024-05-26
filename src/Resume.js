import React from "react";
import file from "./assets/MyResume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./Resume.css";
import resume from "./assets/MyResume.jpg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className={styles.pages} style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'50%'}}>
        <img src={resume} alt="Resume" />
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
