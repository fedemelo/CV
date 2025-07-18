<script lang="ts">
  import type { PersonalInfo } from "../../../shared/schemas/personalInfo";
  export let personalInfo: PersonalInfo;
</script>

<header style="text-align: center;">
  <h1>{personalInfo.name}</h1>
    <a href={`https://${personalInfo.webpage}`}>{personalInfo.webpage}</a>
    <span> | </span>
    <span>
      <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
    </span>
    <span> | </span>
    <span>
      <a href={`https://linkedin.com/in/${personalInfo.linkedInPath}`}>linkedin.com/in/{personalInfo.linkedInPath}</a>
    </span>
    <span> | </span>
    <span>
      <a href={`https://github.com/${personalInfo.gitHubPath}`}>github.com/{personalInfo.gitHubPath}</a>
    </span>
</header>