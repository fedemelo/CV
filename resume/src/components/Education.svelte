<script lang="ts">
  import type { Education } from "../../../shared/schemas/education";
  import { getYearRange } from "../../../shared/utils/year";
  import { filterForResume } from "../../../shared/utils/show";
  import Location from "../../../shared/components/Location.svelte";
  export let education: Education[];
</script>

<section>
  <h2>Education</h2>
  <div class="indented-block">
    {#each filterForResume(education) as edu}
      <div class="no-break-on-print">
        <div class="row">
          <h3>{edu.organization}</h3>
          <Location
            location={{
              city: edu.city,
              state: edu.state,
              country: edu.country,
            }}
          />
        </div>
        <div class="row">
          <p style="font-style: italic;">
            {edu.degree}{#if edu.honors}, <strong>{edu.honors}</strong>{/if}
          </p>
          <p>
            {getYearRange(edu.startDate, edu.trueEndDate ?? edu.graduationDate)}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
