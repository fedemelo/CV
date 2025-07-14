<script lang="ts">
  import Resume from './Resume.svelte';
  import PrintButton from '../../shared/components/PrintButton.svelte';
  import Footer from '../../shared/components/Footer.svelte';
</script>

<div class="app-container">
  <div class="print-container">
    <Resume />
  </div>
  <Footer />
  <PrintButton currentView="resume" />
</div>

<style>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style> 