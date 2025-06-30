<script lang="ts">
  import type { WorkExperience } from "../../data/workExperience";
  import type { Teaching } from "../../data/teaching";
  export let experience: WorkExperience | Teaching;
</script>

<div class="indented-details">
  {#if experience.description}
    <p>{experience.description}</p>
  {/if}
  
  {#if experience.responsibilities?.length}
    <p class="section-title">Responsibilities:</p>
    <ul>
      {#each experience.responsibilities as responsibility}
        <li class="font-small">{responsibility}</li>
      {/each}
    </ul>
  {/if}

  {#if experience.achievements?.length}
    <p class="section-title">Achievements:</p>
    <ul>
      {#each experience.achievements as achievement}
        <li class="font-small">{achievement}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  @import "../../styles/ResponsibilitiesAchievements.css";
</style>