<script lang="ts">
  import type { WorkExperience } from "../../../api/schemas/workExperience";
  import type { Teaching } from "../../../api/schemas/teaching";
  export let experience: WorkExperience | Teaching;
  export let separateSections: boolean = true; // Default to separate sections for work experience

  function formatCodeText(text: string): string {
    return text.replace(/`([^`]+)`/g, '<code>$1</code>');
  }
</script>

<div class="indented-details">
  {#if experience.description}
    <p>{@html formatCodeText(experience.description)}</p>
  {/if}
  
  {#if separateSections}
    <!-- Separate sections with titles (for work experience) -->
    {#if experience.responsibilities?.length}
      <p class="section-title">Responsibilities:</p>
      <ul>
        {#each experience.responsibilities as responsibility}
          <li>{@html formatCodeText(responsibility)}</li>
        {/each}
      </ul>
    {/if}

    {#if experience.achievements?.length}
      <p class="section-title">Achievements:</p>
      <ul>
        {#each experience.achievements as achievement}
          <li>{@html formatCodeText(achievement)}</li>
        {/each}
      </ul>
    {/if}
  {:else}
    <!-- Combined list with achievements first (for teaching) -->
    {#if experience.achievements?.length || experience.responsibilities?.length}
      <ul>
        {#if experience.achievements?.length}
          {#each experience.achievements as achievement}
            <li>{@html formatCodeText(achievement)}</li>
          {/each}
        {/if}
        
        {#if experience.responsibilities?.length}
          {#each experience.responsibilities as responsibility}
            <li>{@html formatCodeText(responsibility)}</li>
          {/each}
        {/if}
      </ul>
    {/if}
  {/if}
</div>

<style>
  @import "../../styles/ResponsibilitiesAchievements.css";
  
  :global(code) {
    font-family: 'Courier New', Monaco, monospace;
    background-color: #f4f4f4;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 0.9em;
  }
</style>