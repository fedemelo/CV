<script lang="ts">
  import { Printer } from "lucide-svelte";
  import html2pdf from "html2pdf.js";

  let generating = false;

  async function handlePrint() {
    generating = true;
    
    const element = document.querySelector(".cv-container");
    if (!element) {
      console.error("CV container not found");
      generating = false;
      return;
    }

    // Clone the element to avoid modifying the original HTML
    const clonedElement = element.cloneNode(true) as HTMLElement;

    // Remove margin and padding from the cloned element
    clonedElement.style.setProperty('margin', '0');
    clonedElement.style.setProperty('padding', '0');
    
    const a4Width = 210;  // A4 width in mm
    const margin = 25.4;  // 1 inch in mm

    clonedElement.style.setProperty('width', `${a4Width - margin*2}mm`);
    clonedElement.style.setProperty('font-size', '10pt');

    // Remove styles from links
    clonedElement.querySelectorAll("a").forEach((link) => {
      link.style.color = "black";
      link.style.textDecoration = "none";
    });

    const opt = {
      margin: [
        margin-10,  // Top margin slightly reduced
        margin
      ],
      filename: "CV_Federico_Melo_Barrero.pdf",
      image: {
        type: "jpeg",
        quality: 100,  // No images are present but just in case
      },
      html2canvas: {
        scale: 10,  // Maximum scale for better quality
        useCORS: true,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait" as const,
      },
      pagebreak: {
        mode: ["css", "legacy"],
        avoid: ["h1", "h2", "h3", "h4", "h5", "h6", "p", ".row", ".item", "li"],
      },
    };

    try {
      await html2pdf().set(opt).from(clonedElement).save();
    } finally {
      generating = false;
    }
  }
</script>

<button
  class="print-button"
  class:disabled={generating}
  on:click={handlePrint}
  disabled={generating}
  title={generating ? "Generating PDF..." : "Generate PDF"}
>
  <Printer size={24} opacity={generating ? 0.5 : 1} />
  {#if generating}
    <span class="loading"></span>
  {/if}
</button>

<style>
  @import "../styles/PrintButton.css";
</style>
