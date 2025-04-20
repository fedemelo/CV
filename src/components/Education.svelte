<script lang="ts">
  import type { Education } from "../data/education";
  import Location from "./Location.svelte";
  export let education: Education[];
</script>

<section>
  <h2>Education</h2>
  {#each education.filter((edu) => !edu.isHidden) as edu}
    <div class="item">
      <div class="row">
        <p class="institution">{edu.institution}</p>
        <Location location={{
          city: edu.city,
          state: edu.state,
          country: edu.country,
        }} />
      </div>
      <div class="row">
        <p>{edu.degree}</p>
        <p class="font-small">
          {edu.startDate ? `${edu.startDate} - ` : ''}{edu.endDate}
        </p>
      </div>
      <div class="row">
        {#if edu.honors}
          <p class="honors">{edu.honors}</p>
        {/if}
      </div>
      <div class="indented-details">
        {#if edu.gpa}
          <p class="font-small">GPA: {edu.gpa}</p>
        {/if}
        {#if edu.details?.length}
          {#each edu.details as detail}
            <p class="font-small">{detail}</p>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</section>

<style>
  @import "../styles/Education.css";
</style>
