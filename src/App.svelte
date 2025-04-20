<script lang="ts">
  import { HEADER } from './data/header';
  import Header from './components/Header.svelte';

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
  
  import PrintButton from './components/PrintButton.svelte';
</script>

<main class="cv-container">
  <Header header={HEADER} />
  <ResearchInterests researchInterests={RESEARCH_INTERESTS} />
  <Education education={EDUCATION} />
  <Awards awards={AWARDS} />
  <WorkExperience workExperience={WORK_EXPERIENCE} />
  <Teaching teaching={TEACHING} />
  <RelevantCoursework relevantCoursework={RELEVANT_COURSEWORK} />
  <Extracurricular extracurriculars={EXTRACURRICULARS} />
</main>

<PrintButton />