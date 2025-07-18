<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import { getYearRange } from "../../../shared/utils/year";
  import Location from "../components/Location.svelte";
  import Achievements from "../components/Achievements.svelte";
  import { filterForCV } from "../../../shared/utils/show";
  export let workExperience: WorkExperience[];
</script>

<section>
  <h2>Work Experience</h2>
  {#each filterForCV(workExperience) as work}
    <div class="no-break">
      <div class="row">
        <h3>{work.organization}</h3>
        <Location
          location={{
            city: work.city,
            state: work.state,
            country: work.country,
          }}
          workMode={work.workMode}
        />
      </div>
      <div class="row">
        <p style="font-style: italic;">{work.title}</p>
        <p>
          {getYearRange(work.startDate, work.endDate, work.isCurrent)}
        </p>
      </div>
    </div>
    <Achievements experience={work} />
  {/each}
</section>
