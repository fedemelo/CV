<script lang="ts">
  import type { PersonalInfo } from "../../shared/schemas/personalInfo";
  export let personalInfo: PersonalInfo;
</script>

<header class="personal-info">
  <h1>{personalInfo.name}</h1>
  <div class="contact-info">
    <span>
      <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
    </span>
    <span>•</span>
    <span>
      <a href={`https://linkedin.com/in/${personalInfo.linkedInPath}`}>linkedin.com/in/{personalInfo.linkedInPath}</a>
    </span>
    <span>•</span>
    <span>
      <a href={`https://github.com/${personalInfo.gitHubPath}`}>github.com/{personalInfo.gitHubPath}</a>
    </span>
    <span>•</span>
    <span>
      <a href={`https://${personalInfo.webpage}`}>{personalInfo.webpage}</a>
    </span>
  </div>
</header>

<style>
  @import "../styles/PersonalInfo.css";
</style> 