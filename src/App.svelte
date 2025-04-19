<script lang="ts">
  import { HEADER } from './data/header';
  import Header from './components/Header.svelte';
</script>

<main class="cv-container">
  <Header header={HEADER} />
</main>

<style>
  .cv-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>