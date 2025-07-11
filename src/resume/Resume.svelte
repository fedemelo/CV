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

<main>
  <PersonalInfo personalInfo={PERSONAL_INFO} />
  <WorkExperience experiences={[...WORK_EXPERIENCE, ...TEACHING]} />
  <Education education={EDUCATION} />
  <Skills skills={SKILLS} />
</main>