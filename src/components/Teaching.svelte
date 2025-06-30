<script lang="ts">
  import { getFullTeachingRoleName, type Teaching } from "../data/teaching";
  import { getPeriodFromDates } from "../utils/period";
  import Location from "./generic/Location.svelte";
  import ResponsibilitiesAchievements from "./generic/ResponsibilitiesAchievements.svelte";

  export let teaching: Teaching[];
</script>

<section>
  <h2>Teaching Experience</h2>
  {#each teaching.filter((teach) => !teach.isHidden) as teach}
    <div class="margin-bottom">
      <div class="row">
        <p class="institution">{teach.organization}</p>
        <Location location={{
          city: teach.city,
          state: teach.state,
          country: teach.country
        }} />
      </div>
      <div class="row">
        <p class="position">{getFullTeachingRoleName(teach.role)}{teach.course ? ` - ${teach.course.name}` : ''}</p>
        <p class="font-small">
          {getPeriodFromDates(teach.startDate, teach.endDate, teach.isCurrent)}
        </p>
      </div>
      {#if teach.supervisor}
        <div class="row">
          <p class="supervisor font-small">Supervisor: {teach.supervisor}</p>
        </div>
      {/if}
      <ResponsibilitiesAchievements experience={teach} />
    </div>
  {/each}
</section>

<style>
  @import "../styles/Teaching.css";
</style>