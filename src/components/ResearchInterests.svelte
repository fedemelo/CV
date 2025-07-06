<script lang="ts">
  import type { ResearchInterest } from '../../api/schemas';
  export let researchInterests: ResearchInterest;
</script>

<section>
  {#if !researchInterests.isHidden}
    <h2>Research Interests</h2>
    <p>{researchInterests.text}</p>
  {/if}
</section>