<script lang="ts">
  import { Printer } from "lucide-svelte";
  import { generatePdf } from "../utils/print";

  let generating = false;

  async function handlePrint() {
    generating = true;
    try {
      await generatePdf();
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