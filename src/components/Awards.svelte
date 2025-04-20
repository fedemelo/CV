<script lang="ts">
  import type { Award } from '../data/awards';
  export let awards: Award[];
</script>

<section>
  <h2>Awards and Honors</h2>
  {#each awards as award}
    <div class="margin-bottom">
      <div class="row">
        <p class="award-title">{award.title}</p>
        <p class="font-small">{award.date}</p>
      </div>
      <p>{award.description}</p>
    </div>
  {/each}
</section>

<style>
  @import '../styles/Awards.css';
</style>