<script lang="ts">
  import type { WorkExperience } from "../../api/schemas/workExperience";
  import { getYearRange } from "../utils/year";
  import Location from "./generic/Location.svelte";
  import ResponsibilitiesAchievements from "./generic/ResponsibilitiesAchievements.svelte";
  export let workExperience: WorkExperience[];
</script>

<section>
  <h2>Work Experience</h2>
  {#each workExperience.filter((work) => !work.isHidden) as work}
    <div class="work-item">
      <div class="row">
        <p class="company">{work.organization}</p>
        <Location location={{ city: work.city, state: work.state, country: work.country }} workMode={work.workMode} />
      </div>
      <div class="row">
        <p class="position">{work.title}</p>
        <p>
          {getYearRange(work.startDate, work.endDate, work.isCurrent)}
        </p>
      </div>
      <ResponsibilitiesAchievements experience={work} />
    </div>
  {/each}
</section>

<style>
  @import "../styles/WorkExperience.css";
</style>