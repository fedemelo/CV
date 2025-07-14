<script lang="ts">
  import type { WorkMode } from "../../shared/schemas/workExperience";
  import type { Location } from "../../shared/schemas/location";
  export let location: Location;
  export let workMode: WorkMode | undefined = undefined;
</script>

<p>
  {[location.city,
    location.state,
    location.country,
    ].filter(Boolean).join(', ')}
  {workMode && workMode == 'remote' ? ' (Remote)' : ''}
</p>