<script lang="ts">
  import { PERSONAL_INFO } from '../data/personalInfo';
  import PersonalInfo from './components/PersonalInfo.svelte';

  import { WORK_EXPERIENCE } from '../data/workExperience';
  import WorkExperience from './components/WorkExperience.svelte';

  import { TEACHING } from '../data/teaching';

  import { EDUCATION } from '../data/education';
  import Education from './components/Education.svelte';

  import { SKILLS } from '../data/skills';
  import Skills from './components/Skills.svelte';
</script>

<main class="resume-container">
  <PersonalInfo personalInfo={PERSONAL_INFO} />
  <WorkExperience experiences={[...WORK_EXPERIENCE, ...TEACHING]} />
  <Education education={EDUCATION} />
  <Skills skills={SKILLS} />
</main>

<style>
  .resume-container {
    max-width: 8.5in;
    margin: 0 auto;
    padding: 0.5in;
    font-size: 11px;
    font-family: 'Arial', sans-serif;
    line-height: 1.4;
    color: #333;
    background: white;
  }

  /* Print styles for one-page constraint */
  @media print {
    .resume-container {
      margin: 0;
      padding: 0.5in;
      font-size: 10px;
    }
  }
</style> 