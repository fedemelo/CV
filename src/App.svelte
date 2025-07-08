<script lang="ts">
  import { PERSONAL_INFO } from './data/personalInfo';
  import PersonalInfo from './components/PersonalInfo.svelte';

  import { RESEARCH_INTERESTS } from './data/researchInterests';
  import ResearchInterests from './components/ResearchInterests.svelte';

  import { EDUCATION } from './data/education';
  import Education from './components/Education.svelte';

  import { AWARDS } from './data/awards';
  import Awards from './components/Awards.svelte';

  import { EXTRACURRICULARS } from './data/extracurricular';
  import Extracurricular from './components/Extracurricular.svelte';

  import { RELEVANT_COURSEWORK } from './data/relevantCoursework';
  import RelevantCoursework from './components/RelevantCoursework.svelte';

  import { WORK_EXPERIENCE } from './data/workExperience';
  import WorkExperience from './components/WorkExperience.svelte';

  import { TEACHING } from './data/teaching';
  import Teaching from './components/Teaching.svelte';

  import { SKILLS } from './data/skills';
  import Skills from './components/Skills.svelte';
  
  import PrintButton from './components/PrintButton.svelte';
  import Footer from './components/generic/Footer.svelte';
</script>

<main class="cv-container">
  <PersonalInfo personalInfo={PERSONAL_INFO} />
  <ResearchInterests researchInterests={RESEARCH_INTERESTS} />
  <Education education={EDUCATION} />
  <Awards awards={AWARDS} />
  <WorkExperience workExperience={WORK_EXPERIENCE} />
  <Teaching teaching={TEACHING} />
  <RelevantCoursework relevantCoursework={RELEVANT_COURSEWORK} />
  <Skills skills={SKILLS} />
  <Extracurricular extracurriculars={EXTRACURRICULARS} />
</main>

<Footer />
<PrintButton />