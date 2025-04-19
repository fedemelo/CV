<script lang="ts">
  import type { Header } from '../data/header';
  export let header: Header;
</script>

<header>
  <h1>{header.name}</h1>
  <div class="contact-info">
    <p>{header.email}</p>
    <p>Webpage: <a href={header.webpage.url}>{header.webpage.label}</a></p>
    <p>LinkedIn: <a href={header.linkedIn.url}>{header.linkedIn.label}</a></p>
    <p>GitHub: <a href={header.github.url}>{header.github.label}</a></p>
  </div>
</header>

<style>
  @import '../styles/Header.css';
</style>