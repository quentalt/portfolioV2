<script lang="ts">
    import { Badge } from 'flowbite-svelte';
    import {LinkOutline} from "flowbite-svelte-icons";
    export let project;
</script>

<div class="project-card">
    <h3 class="font-semibold text-lg">{project.title}</h3>
    <img src={project.picture} alt={project.title} class="mt-2 rounded-lg shadow-md" />
    <p class="mt-2 text-gray-700">{project.description}</p>
    <div class="mt-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
           Voir le projet <LinkOutline class="inline-block ml-1" />
        </a>
    </div>
    <div class="mt-2">
        {#each project.tags as tag}
            <Badge class="mr-2 mb-2">{tag}</Badge>
        {/each}
    </div>
</div>

<style lang="postcss">


    .project-card {
        background-color: #fff;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
</style>