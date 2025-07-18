import html2pdf from "html2pdf.js";

interface PdfGenerationConfig {
  margin: [number, number];
  filename: string;
  image: {
    type: string;
    quality: number;
  };
  html2canvas: {
    scale: number;
    useCORS: boolean;
    letterRendering: boolean;
    allowTaint?: boolean;
    backgroundColor?: string;
    scrollX?: number;
    scrollY?: number;
  };
  jsPDF: {
    unit: string;
    format: string;
    orientation: "portrait" | "landscape";
  };
  pagebreak: {
    mode: string[];
    avoid: string[];
  };
}

function getCvElement(): HTMLElement {
  const element = document.querySelector(".print-container");
  if (!element) throw new Error("Print container not found");
  return element as HTMLElement;
}

function getAndPrepareClonedElement(element: HTMLElement, margin: number): HTMLElement {
  // Use a clone to avoid modifying the displayed HTML.
  const clonedElement = element.cloneNode(true) as HTMLElement;

  // Margins cannot be handled by the print-container because they are
  // applied to the whole element, not per page.
  clonedElement.style.setProperty("margin", "0");
  clonedElement.style.setProperty("padding", "0");

  // The paper size specified in the jsPDF.format property must coincide
  // with the paper width below for margin calculation to work as expected.
  const a4WidthMm = 210;

  const widthWithoutMargins = a4WidthMm - margin * 2;
  clonedElement.style.setProperty("width", `${widthWithoutMargins}mm`);
  return clonedElement;
}

function getPdfConfig(margin: number, filename: string): PdfGenerationConfig {
  return {
    margin: [margin, margin],
    filename,
    image: {
      type: "jpeg",
      quality: 100,
    },
    html2canvas: {
      scale: 10,
      useCORS: true,
      letterRendering: false, // Clearer text rendering
      allowTaint: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4", // Paper size. Must coincide with the paper width in mm above
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["css", "legacy"],
      avoid: [
        // This class is used to avoid page breaks on specific elements
        ".no-break-on-print",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        ".row",
        ".item",
        "li",
      ],
    },
  };
}

export async function generatePdf(view: "cv" | "resume"): Promise<void> {
  const margin = 25.4 / 2; // 1/2 inch in mm

  try {
    const element = getCvElement();
    const clonedElement = getAndPrepareClonedElement(element, margin);

    const filename = `${view === "cv" ? "CV" : "Resume"}_Federico_Melo_Barrero.pdf`;
    const pdfConfig = getPdfConfig(margin, filename);

    await html2pdf().set(pdfConfig).from(clonedElement).save();
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}
