<script lang="ts">
  import type { Extracurricular } from "../../../shared/schemas/extracurricular";
  import { filterForCV } from "../../../shared/utils/show";
  export let extracurriculars: Extracurricular[];
</script>

<section>
  <h2>Extracurricular Activities</h2>
  {#each filterForCV(extracurriculars) as extracurricular}
    <div class="extracurricular-item no-break">
      <div class="row">
        <p style="font-weight: bold;">{extracurricular.description}</p>
      </div>
      <div class="indented-details">
        {#each extracurricular.events as event}
          <div class="row">
            <p>{event}</p>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>