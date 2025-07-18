<script lang="ts">
  import type { Extracurricular } from "../../../shared/schemas/extracurricular";
  import { filterForCV } from "../../../shared/utils/show";
  export let extracurriculars: Extracurricular[];
</script>

<section>
  <h2>Extracurricular Activities</h2>
  {#each filterForCV(extracurriculars) as extracurricular}
    <div class="no-break-on-print">
      <div class="row">
        <h3>{extracurricular.description}</h3>
      </div>
      <div class="indented-block">
        {#each extracurricular.events as event}
          <div class="row">
            <p>{event}</p>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>