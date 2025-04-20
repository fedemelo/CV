<script lang="ts">
  import { Printer } from 'lucide-svelte';
  import html2pdf from 'html2pdf.js';
  
  let generating = false;

  async function handlePrint() {
    generating = true;
    const element = document.querySelector('.cv-container');
    
    if (!element) {
      console.error('CV container not found');
      generating = false;
      return;
    }

    const opt = {
      margin: [2, 2],
      filename: 'CV_Federico_Melo_Barrero.pdf',
      image: { 
        type: 'jpeg', 
        quality: 100,
      },
      html2canvas: { 
        scale: 10,  // Maximum scale for best quality
        useCORS: true,
        letterRendering: true
      },
      jsPDF: {
        unit: 'cm',
        format: 'a4',
        orientation: 'portrait' as const
      },
      pagebreak: { 
        mode: ['css', 'legacy'],
        avoid: [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'p',
          '.row', '.item',
          'li',
        ]
      }
    };

    try {
      await html2pdf().set(opt).from(element as HTMLElement).save();
    } finally {
      generating = false;
    }
  }
</script>

<button 
  class="print-button" 
  on:click={handlePrint} 
  disabled={generating}
  title="Generate PDF"
>
  <Printer size={24} opacity={generating ? 0.5 : 1} />
  {#if generating}
    <span class="loading"></span>
  {/if}
</button>

<style>
  @import "../styles/PrintButton.css";
</style>