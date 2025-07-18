<script lang="ts">
  import type { Skill } from "../../../shared/schemas/skill";
  
  export let skills: Skill[];
</script>

<section>
  <h2>Technical Skills</h2>
  <div class="indented-block">
      {#each skills as skillCategory}
        <p><strong>{skillCategory.category}</strong>: {skillCategory.skills.join(', ')}</p>
    {/each}
  </div>
</section>