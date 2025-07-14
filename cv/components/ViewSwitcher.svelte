<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let currentView: 'cv' | 'resume' = 'cv';
  
  const dispatch = createEventDispatcher<{
    'view-change': 'cv' | 'resume'
  }>();
  
  function switchView(view: 'cv' | 'resume') {
    dispatch('view-change', view);
  }
</script>

<div class="view-switcher">
  <button 
    class="view-button" 
    class:active={currentView === 'cv'} 
    on:click={() => switchView('cv')}
  >
    CV
  </button>
  <button 
    class="view-button" 
    class:active={currentView === 'resume'} 
    on:click={() => switchView('resume')}
  >
    Resume
  </button>
</div>

<style>
  .view-switcher {
    display: flex;
    justify-content: center;
    gap: 0;
    margin: 20px 0;
  }

  .view-button {
    padding: 10px 20px;
    border: 2px solid #333;
    background-color: white;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    border-radius: 0;
  }

  .view-button:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid #333;
  }

  .view-button:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: 1px solid #333;
  }

  .view-button:hover {
    background-color: #f5f5f5;
  }

  .view-button.active {
    background-color: #333;
    color: white;
  }

  /* Hide view switcher when printing */
  @media print {
    .view-switcher {
      display: none;
    }
  }
</style> 