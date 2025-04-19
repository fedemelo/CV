<script lang="ts">
  import type { Education } from "../data/education";
  export let education: Education[];
</script>

<section class="section">
  <h2>Education</h2>
  {#each education.filter((edu) => !edu.isHidden) as edu}
    <div class="education-item">
      <div class="row">
        <p class="institution">{edu.institution}</p>
        <p class="small">{edu.location}</p>
      </div>
      <div class="row">
        <p>{edu.degree}</p>
        <p class="small">
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
          <p class="small">GPA: {edu.gpa}</p>
        {/if}
        {#if edu.details?.length}
          {#each edu.details as detail}
            <p class="small">{detail}</p>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</section>

<style>
  @import "../styles/Education.css";
</style>
