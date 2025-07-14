<script lang="ts">
  import CV from './CV.svelte';
  import PrintButton from '../../shared/components/PrintButton.svelte';
  import Footer from '../../shared/components/Footer.svelte';
</script>

<div class="app-container">
  <div class="print-container">
    <CV />
  </div>
  <Footer />
  <PrintButton currentView="cv" />
</div>

<style>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style> 