<script lang="ts">
    import AppBar from "../components/AppBar.svelte";
    import TechTags from "../components/TechTags.svelte";
    import ProfileImage from "../components/ProfileImage.svelte";
    import Project from "../components/Project.svelte";

    const techTags = ["TypeScript", "Angular", ".NET", "React/Next", "Node.js"];

    export let data;

</script>

<AppBar />

<section class="text-center mt-20 p-4">
    <h1 class="text-2xl font-bold">Bonjour, je suis Quentin Altieri</h1>
    <p class="mt-2">Développeur Full Stack passionné par le développement web et mobile. Diplomé d'un Master CTO & Tech Lead</p>
    <ProfileImage src="photo.jpg" alt="Votre Photo" />
    <TechTags tags={techTags} />
</section>

<section class="p-4 mt-8">
    <h2 class="text-xl font-semibold">Expériences</h2>
    <div class="experience">
        <p>2023 OCAPIAT (alternance) | 1 an </p>
        <p>2022/2023 : ASPHERE (alternance) | 1 an</p>
        <p>2021 ACM SANTE (alternance)</p>
        <p>2019 ENC(AVEDOS) (Stage)</p>
        <p>2020 Amundi (Stage)</p>
        <p>2018 CEA/DAM/DIF (Stage)</p>
    </div>
</section>

<section class="p-4 mt-8">
    <h2 class="text-xl font-semibold">Projets</h2>
    <div class="grid">
        {#each data.projects as project}
            <Project {project} />
        {/each}
    </div>
</section>
<footer class="text-center p-4 mt-8">
    <p>&copy; {new Date().getFullYear()} Quentin Altieri</p>
</footer>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
    }
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: 'M PLUS Rounded 1c', Arial, sans-serif;
        background-color: #f5f5f5;
        color: #333;
    }

    .experience {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
        margin-top: 1rem;
    }


</style>