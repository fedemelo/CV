<script lang="ts">
  import type { Header } from "../data/header";
  export let header: Header;
</script>

<header>
  <h1>{header.name}</h1>
  <div class="contact-info">
    <div class="columns-container">
      <div class="column">
        <p>
          Email: <a href={`mailto:${header.email}`}>{header.email}</a>
        </p>
        <p>
          LinkedIn: <a href={header.linkedIn.url}>{header.linkedIn.label}</a>
        </p>
      </div>
      <div class="column">
        <p>Webpage: <a href={header.webpage.url}>{header.webpage.label}</a></p>
        <p>GitHub: <a href={header.github.url}>{header.github.label}</a></p>
      </div>
    </div>
  </div>
</header>

<style>
  @import "../styles/Header.css";
</style>
