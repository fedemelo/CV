<script lang="ts">
  import type { WorkMode } from "../data/workExperience";
  import type { Location } from "../data/types";
  export let location: Location;
  export let workMode: WorkMode | undefined = undefined;
</script>

<p class="font-small">
  {location.city}{location.state ? `, ${location.state}` : ''}{location.country ? `, ${location.country}` : ''}{workMode && (workMode == 'remote' ? ' (Remote)' : '')}
</p>