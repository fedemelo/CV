<script lang="ts">
  import { getFullTeachingRoleName, type Teaching } from "../data/teaching";
  import Location from "./Location.svelte";

  export let teaching: Teaching[];
</script>

<section>
  <h2>Teaching Experience</h2>
  {#each teaching.filter((teach) => !teach.isHidden) as teach}
    <div class="item">
      <div class="row">
        <p class="institution">{teach.institution}</p>
        <Location location={{
          city: teach.city,
          state: teach.state,
          country: teach.country
        }} />
      </div>
      <div class="row">
        <p class="position">{getFullTeachingRoleName(teach.role)}{teach.course ? ` - ${teach.course.name}` : ''}</p>
        <p class="font-small">
          {#if teach.period}
            {teach.period}
          {:else}
            {teach.startDate} - {teach.isCurrent ? 'Present' : teach.endDate}
          {/if}
        </p>
      </div>
      {#if teach.supervisor}
        <div class="row">
          <p class="supervisor">Supervisor: {teach.supervisor}</p>
        </div>
      {/if}
      <div class="indented-details">
        {#if teach.responsibilities?.length}
          <ul>
            {#each teach.responsibilities as responsibility}
              <li class="font-small">{responsibility}</li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  {/each}
</section>

<style>
  @import "../styles/Teaching.css";
</style>