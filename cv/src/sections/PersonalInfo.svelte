<script lang="ts">
  import type { PersonalInfo } from "../../../shared/schemas/personalInfo";
  export let personalInfo: PersonalInfo;
</script>

<header class="margin-bottom">
  <h1 style="font-variant: small-caps;">{personalInfo.name}</h1>
  <div class="contact-info">
    <div class="columns-container">
      <div class="column">
        <p>
          Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </p>
        <p>
          LinkedIn: <a href={`https://linkedin.com/in/${personalInfo.linkedInPath}`}>{personalInfo.linkedInPath}</a>
        </p>
      </div>
      <div class="column">
        <p>Webpage: <a href={`https://${personalInfo.webpage}/`}>{personalInfo.webpage}</a></p>
        <p>GitHub: <a href={`https://github.com/${personalInfo.gitHubPath}`}>{personalInfo.gitHubPath}</a></p>
      </div>
    </div>
  </div>
</header>

<style>
  @import "../styles/PersonalInfo.css";
</style>
