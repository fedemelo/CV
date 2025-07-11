<script lang="ts">
  import type { WorkExperience } from "../../../api/schemas/workExperience";
  import type { Teaching } from "../../../api/schemas/teaching";
  export let experience: WorkExperience | Teaching;
</script>

<div class="indented-details">
  {#if experience.description}
    <p>{experience.description}</p>
  {/if}
  <ul>
    {#if experience.achievements?.length}
      {#each experience.achievements as achievement}
        <li>{achievement}</li>
      {/each}
    {/if}
  </ul>
</div>

<style>
  @import "../../styles/ResponsibilitiesAchievements.css";
</style>