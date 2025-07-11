<script lang="ts">
  import CV from './cv/CV.svelte';
  import Resume from './resume/Resume.svelte';
  import PrintButton from './components/PrintButton.svelte';
  import Footer from './components/Footer.svelte';
  import ViewSwitcher from './components/ViewSwitcher.svelte';
  
  let currentView: 'cv' | 'resume' = 'cv';
  
  function handleViewChange(event: CustomEvent<'cv' | 'resume'>) {
    currentView = event.detail;
  }
</script>

<div class="app-container">
  <ViewSwitcher 
    {currentView} 
    on:view-change={handleViewChange} 
  />
  
  {#if currentView === 'cv'}
    <CV />
  {:else}
    <Resume />
  {/if}
  
  <Footer />
  <PrintButton />
</div>

<style>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>