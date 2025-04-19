<script lang="ts">
  import { HEADER } from './data/header';
  import Header from './components/Header.svelte';

  import { RESEARCH_INTERESTS } from './data/researchInterests';
  import ResearchInterests from './components/ResearchInterests.svelte';

  import { EDUCATION } from './data/education';
  import Education from './components/Education.svelte';
  
  import { AWARDS } from './data/awards';
  import Awards from './components/Awards.svelte';
</script>

<main class="cv-container">
  <Header header={HEADER} />
  <ResearchInterests researchInterests={RESEARCH_INTERESTS} />
  <Education education={EDUCATION} />
  <Awards awards={AWARDS} />
</main>