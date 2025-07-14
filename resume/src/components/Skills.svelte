<script lang="ts">
  import type { Skill } from "../../../shared/schemas/skill";
  
  export let skills: Skill[];
</script>

<section class="skills">
  <h2>TECHNICAL SKILLS</h2>
  <div class="skills-grid">
    {#each skills as skillCategory}
      <div class="skill-category">
        <strong>{skillCategory.category}:</strong>
        <span class="skill-list">{skillCategory.skills.join(', ')}</span>
      </div>
    {/each}
  </div>
</section>

<style>
  @import "../styles/Skills.css";
</style> 