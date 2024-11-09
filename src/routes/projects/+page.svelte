<script lang="ts">
    import { onMount } from "svelte";
    import Project from "../../components/Project.svelte";
    import { page } from "$app/stores";
    import AppBar from "../../components/AppBar.svelte";
    import { Search } from 'flowbite-svelte';
    import { writable, derived } from 'svelte/store';

    let projects = writable([]);

    export let data;

    onMount(() => {
        page.subscribe(({ data }) => {
            projects.set(data.projects);
        });
    });

    const searchTerm = writable('');

    const filteredProjects = derived(
        [projects, searchTerm],
        ([$projects, $searchTerm]) => {
            if (!$searchTerm) return $projects;
            return $projects.filter(project => project.title.toLowerCase().includes($searchTerm.toLowerCase()));
        }
    );

    export { filteredProjects, searchTerm };
</script>

<AppBar/>

<section class="p-4 mt-8">
    <form class="flex gap-2">
        <Search bind:value={$searchTerm} placeholder="Rechercher un projet..." class="search-bar"/>
    </form>
</section>

<section class="p-4 mt-8">
    <h2 class="text-xl font-semibold mb-4">Mes Projets</h2>
    <div class="space-y-4">
        {#each $filteredProjects as project}
            <Project {project}/>
        {/each}
    </div>
</section>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');

    :global(html) {
        background-color: #f5f5f5;
        font-family: 'M PLUS Rounded 1c', Arial, sans-serif;
        color: #333;
    }
    .search-bar {
        width: 50%;
    }
</style>