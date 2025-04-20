<script lang="ts">
  import type { ResearchInterests } from '../data/researchInterests';
  export let researchInterests: ResearchInterests;
</script>

<section>
  {#if !researchInterests.isHidden}
    <h2>Research Interests</h2>
    <p>{researchInterests}</p>
  {/if}
</section>

<style>
  @import '../styles/ResearchInterests.css';
</style>