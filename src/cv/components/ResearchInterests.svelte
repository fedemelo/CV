<script lang="ts">
  import type { ResearchInterest } from '../../../api/schemas/researchInterest';
  export let researchInterests: ResearchInterest;
</script>

<section>
  {#if researchInterests.showInCV}
    <h2>Research Interests</h2>
    <p>{researchInterests.text}</p>
  {/if}
</section>