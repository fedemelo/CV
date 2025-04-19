<script lang="ts">
  import { CV_DATA } from './data/cv-data';
  import Header from './components/Header.svelte';
</script>

<main class="cv-container">
  <Header name={CV_DATA.name} contact={CV_DATA.contact} />
</main>

<style>
  .cv-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>