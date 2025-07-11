<script lang="ts">
  import type { Education } from "../../../api/schemas/education";
  import { getYearRange } from "../../utils/year";
  import { filterForResume } from "../../utils/show";
  export let education: Education[];
</script>

<section class="education">
  <h2>EDUCATION</h2>
  {#each filterForResume(education) as edu}
    <div class="education-item">
      <div class="education-header">
        <div class="degree-institution">
          <strong>{edu.degree}</strong>
          <span class="separator">|</span>
          <span>{edu.organization}</span>
        </div>
        <div class="dates">
          {getYearRange(edu.startDate, edu.trueEndDate ?? edu.graduationDate)}
        </div>
      </div>
      <div class="location">
        {edu.city}{edu.state ? `, ${edu.state}` : ''}{edu.country ? `, ${edu.country}` : ''}
      </div>
      {#if edu.honors || edu.gpa}
        <div class="honors-gpa">
          {#if edu.honors}
            <span class="honors">{edu.honors}</span>
          {/if}
          {#if edu.gpa}
            <span class="gpa">GPA: {edu.gpa}</span>
          {/if}
        </div>
      {/if}
      {#if edu.details && edu.details.length > 0}
        <ul class="details">
          {#each edu.details.slice(0, 2) as detail}
            <li>{detail}</li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</section>

<style>
  @import "../styles/Education.css";
</style> 