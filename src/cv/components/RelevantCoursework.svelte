<!-- src/components/RelevantCoursework.svelte -->
<script lang="ts">
  import type { RelevantCoursework } from "../../../api/schemas/relevantCoursework";
  import { filterForCV } from "../../utils/show";
  export let relevantCoursework: RelevantCoursework[];
</script>

<section>
  <h2>Relevant Coursework</h2>
  <div class="coursework-container">
    {#each filterForCV(relevantCoursework) as area}
      <div class="coursework-item">
        <div class="row">
          <p class="area">{area.area}</p>
        </div>
        <div class="indented-details">
          {#each area.courses as course}
            <p>{course.name}</p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  @import "../styles/RelevantCoursework.css";
</style>