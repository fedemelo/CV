<script lang="ts">
  import type { WorkExperience, WorkMode } from "../data/workExperience";
  import Location from "./Location.svelte";
  export let workExperience: WorkExperience[];
</script>

<section>
  <h2>Work Experience</h2>
  {#each workExperience.filter((work) => !work.isHidden) as work}
    <div class="work-item">
      <div class="row">
        <p class="company">{work.company}</p>
        <Location location={{ city: work.city, state: work.state, country: work.country }} workMode={work.workMode} />
      </div>
      <div class="row">
        <p class="position">{work.title}{work.isInternship ? ' (internship)' : ''}</p>
        <p class="small">
          {work.startDate} - {work.isCurrent ? 'Present' : work.endDate}
        </p>
      </div>
      <div class="indented-details">
        <p>{work.description}</p>
        
        {#if work.responsibilities?.length}
          <p class="section-title">Key Responsibilities:</p>
          <ul>
            {#each work.responsibilities as responsibility}
              <li class="small">{responsibility}</li>
            {/each}
          </ul>
        {/if}

        {#if work.achievements?.length}
          <p class="section-title">Achievements:</p>
          <ul>
            {#each work.achievements as achievement}
              <li class="small">{achievement}</li>
            {/each}
          </ul>
        {/if}

        {#if work.technologies?.length}
          <p class="section-title">Technologies:</p>
          <p class="small technologies">{work.technologies.join(' • ')}</p>
        {/if}
      </div>
    </div>
  {/each}
</section>

<style>
  @import "../styles/WorkExperience.css";
</style>