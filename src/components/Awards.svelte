<script lang="ts">
  import type { Award } from "../data/awards";
  import { getYearRange, getYearSequence } from "../utils/yearRange";
  export let awards: Award[];
</script>

<section>
  <h2>Awards and Honors</h2>
  {#each awards as award}
    <div class="margin-bottom">
      <div class="row">
        <p class="award-title">{award.title}</p>
        {#if award.date}
          <p class="font-small">{getYearRange(award.date)}</p>
        {:else if award.instances}
          <p class="font-small">{getYearSequence(award.instances.map((instance) => instance.date))}</p>
        {/if}
      </div>
      <p>{award.description}</p>
    </div>
  {/each}
</section>

<style>
  @import "../styles/Awards.css";
</style>
