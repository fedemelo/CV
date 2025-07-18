<script lang="ts">
  import Resume from './Resume.svelte';
  import PrintButton from '../../shared/components/PrintButton.svelte';
  import Footer from '../../shared/components/Footer.svelte';
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
  <Resume />
  <Footer />
  <PrintButton currentView="resume" />
</div>