<script lang="ts">
  import type { Publication } from "../../api/schemas/publication";
  import { filterForCV } from "../utils/show";
  export let publications: Publication[];
</script>

<section>
  <h2>Publications</h2>
  {#each filterForCV(publications) as publication}
    <div class="publication no-break">
      <p>
        {#each publication.authors as author, index}
          {#if author.isUser}
            <strong>{author.name}</strong>
          {:else}
            {author.name}
          {/if}
          {#if index < publication.authors.length - 1}, {/if}
        {/each}
        
        ({publication.year}). 
        
        "{publication.title}". 
        
        <em>{publication.description}</em>. 
        
        {publication.institution}. 
        
        {#if publication.url && publication.linkText}
          Available at: <a href={publication.url} target="_blank" rel="noopener noreferrer">{publication.linkText}</a>
        {/if}
      </p>
    </div>
  {/each}
</section>

<style>
  @import "../styles/Publications.css";
</style> 