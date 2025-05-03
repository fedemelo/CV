<script lang="ts">
  import type { Header } from "../data/header";
  export let header: Header;
</script>

<header class="margin-bottom">
  <h1>{header.name}</h1>
  <div class="contact-info">
    <div class="columns-container">
      <div class="column">
        <p>
          Email: <a href={`mailto:${header.email}`}>{header.email}</a>
        </p>
        <p>
          LinkedIn: <a href={`https://linkedin.com/in/${header.linkedIn}`}>{header.linkedIn}</a>
        </p>
      </div>
      <div class="column">
        <p>Webpage: <a href={`https://${header.webpage}/`}>{header.webpage}</a></p>
        <p>GitHub: <a href={`https://github.com/${header.github}`}>{header.github}</a></p>
      </div>
    </div>
  </div>
</header>

<style>
  @import "../styles/Header.css";
</style>
