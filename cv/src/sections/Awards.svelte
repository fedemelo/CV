<script lang="ts">
  import type { Award } from "../../../shared/schemas/award";
  import { filterForCV } from "../../../shared/utils/show";
  import { getYearRange, getYearSequence } from "../../../shared/utils/year";
  export let awards: Award[];
</script>

<section>
  <h2>Awards and Honors</h2>
  {#each filterForCV(awards) as award}
    <div class="no-break-on-print">
      <h3>{award.title}</h3>
      <div class="row">
        <p>{award.organization}</p>
        {#if award.date}
          <p>{getYearRange(award.date)}</p>
        {:else if award.instances}
          <p>{getYearSequence(award.instances.map((instance) => instance.date))}</p>
        {/if}
      </div>
      <div class="indented-block">
        <p>{award.description}</p>
      </div>
    </div>
  {/each}
</section>