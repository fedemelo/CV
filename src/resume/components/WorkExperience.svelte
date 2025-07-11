<script lang="ts">
  import type { WorkExperience } from "../../../api/schemas/workExperience";
  import type { Teaching } from "../../../api/schemas/teaching";
  import { getYearRange } from "../../utils/year";
  import { getPeriodFromDates } from "../../utils/period";
  import { filterForResume } from "../../utils/show";
  export let experiences: (WorkExperience | Teaching)[];

  function sortExperiences(experiences: (WorkExperience | Teaching)[]) {
    return experiences
      .sort((a, b) => {
        if (a.isCurrent && b.isCurrent) return 0;
        if (!a.isCurrent && b.isCurrent) return 1;
        if (a.isCurrent && !b.isCurrent) return -1;
        
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      });
  }
  const sortedExperiences = sortExperiences(filterForResume(experiences))
</script>

<section class="work-experience">
  <h2>PROFESSIONAL EXPERIENCE</h2>
  {#each sortedExperiences as experience}
    <div class="experience-item">
      <div class="experience-header">
        <div class="title-organization">
          <strong>{experience.title}</strong>
          <span class="separator">|</span>
          <span>{experience.organization}</span>
        </div>
        <div class="dates">
          {#if 'workMode' in experience}
            {getYearRange(experience.startDate, experience.endDate, experience.isCurrent)}
          {:else}
            {getPeriodFromDates(experience.startDate, experience.endDate, experience.isCurrent)}
          {/if}
        </div>
      </div>
      <div class="location">
        {experience.city}{experience.state ? `, ${experience.state}` : ''}{experience.country ? `, ${experience.country}` : ''}
        {#if 'workMode' in experience && experience.workMode}
          <span class="work-mode">({experience.workMode})</span>
        {/if}
      </div>
      {#if experience.achievements && experience.achievements.length > 0}
        <ul class="achievements">
          {#each experience.achievements.slice(0, 3) as achievement}
            <li>{achievement}</li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</section>

<style>
  @import "../styles/WorkExperience.css";
</style> 