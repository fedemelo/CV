<script lang="ts">
  import type { Skill } from "../../../api/schemas/skill";
  import { filterForCV } from "../../utils/show";
  export let skills: Skill[];
</script>

<section>
  <h2>Technical Skills</h2>
  {#each filterForCV(skills) as skillCategory}
    <div>
      <span class="category-title">{skillCategory.category}:</span>
      <span class="skills-list">{skillCategory.skills.join(', ')}</span>
    </div>
  {/each}
</section>

<style>
  .category-title {
    font-weight: bold;
  }
  
  .skills-list {
    margin-left: 0.5rem;
  }
</style> 