<script lang="ts">
  import type { Extracurricular } from "../data/extracurricular";
  export let extracurriculars: Extracurricular[];
</script>

<section>
  <h2>Extracurricular Activities</h2>
  {#each extracurriculars as extracurricular}
    <div class="extracurricular-item">
      <div class="row">
        <p style="font-weight: bold;">{extracurricular.description}</p>
      </div>
      <div class="indented-details">
        {#each extracurricular.events as event}
          <div class="row">
            <p>{event.title}</p>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>