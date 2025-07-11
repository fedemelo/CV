import html2pdf from "html2pdf.js";

interface PrintOptions {
  margin: number;
  a4Width: number;
  baseScale: number;
  baseFontSize: string;
}

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
    orientation: 'portrait' | 'landscape';
  };
  pagebreak: {
    mode: string[];
    avoid: string[];
  };
}

const getCvElement = (): HTMLElement => {
  const element = document.querySelector(".print-container");
  if (!element) throw new Error("Print container not found");
  return element as HTMLElement;
};

const prepareClonedElement = (
  element: HTMLElement,
  options: PrintOptions
): HTMLElement => {
  const clonedElement = element.cloneNode(true) as HTMLElement;
  
  // Reset spacing
  clonedElement.style.setProperty('margin', '0');
  clonedElement.style.setProperty('padding', '0');
  
  // Set dimensions
  clonedElement.style.setProperty(
    'width', 
    `${options.a4Width - options.margin * 2}mm`
  );
  
  // Set font size
  clonedElement.style.setProperty('font-size', options.baseFontSize);
  
  return clonedElement;
};

const removeLinksStyling = (element: HTMLElement): void => {
  element.querySelectorAll("a").forEach((link) => {
    link.style.color = "black";
    link.style.textDecoration = "none";
  });
};

const fixTextSpacing = (element: HTMLElement): void => {
  element.querySelectorAll("p, li").forEach((textElement) => {
    const el = textElement as HTMLElement;
    el.style.setProperty('word-spacing', 'normal');
    el.style.setProperty('letter-spacing', 'normal');
  });
  
  element.style.setProperty('text-rendering', 'optimizeSpeed');
};

const fixH2FontSize = (element: HTMLElement): void => {
  element.querySelectorAll("h2").forEach((h2Element) => {
    const el = h2Element as HTMLElement;
    el.style.setProperty('font-size', '10pt');
  });
};

const getPdfConfig = (
  options: PrintOptions,
  filename: string
): PdfGenerationConfig => ({
  margin: [
    options.margin - 10,  // Top margin slightly reduced
    options.margin
  ],
  filename,
  image: {
    type: "jpeg",
    quality: 100,
  },
  html2canvas: {
    scale: options.baseScale,
    useCORS: true,
    letterRendering: false,  // Clearer text rendering
    allowTaint: true,
    backgroundColor: '#ffffff',
    scrollX: 0,
    scrollY: 0,
  },
  jsPDF: {
    unit: "mm",
    format: "a4",
    orientation: "portrait",
  },
  pagebreak: {
    mode: ["css", "legacy"],
    avoid: ["h1", "h2", "h3", "h4", "h5", "h6", "p", ".row", ".item", "li"],
  },
});

// Main print function
export const generatePdf = async (view: 'cv' | 'resume'): Promise<void> => {
  const printOptions: PrintOptions = {
    margin: 25.4,  // 1 inch in mm
    a4Width: 210,  // A4 width in mm
    baseScale: 10,
    baseFontSize: '10pt',
  };

  try {
    const element = getCvElement();
    const clonedElement = prepareClonedElement(element, printOptions);
    removeLinksStyling(clonedElement);
    fixTextSpacing(clonedElement);
    fixH2FontSize(clonedElement);

    const pdfConfig = getPdfConfig(
      printOptions, 
      `${view === 'cv' ? "CV" : "Resume"}_Federico_Melo_Barrero.pdf`
    );

    await html2pdf()
      .set(pdfConfig)
      .from(clonedElement)
      .save();

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};