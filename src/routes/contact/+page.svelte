<script>
    import { Button } from 'flowbite-svelte';
    import Icon from "@iconify/svelte";
    import AppBar from "../../components/AppBar.svelte";
</script>

<AppBar />

<section class="p-4 mt-8">
    <h2 class="text-2xl font-semibold mb-4">À propos de moi</h2>
    <div class="space-y-4">
        <div class="flex items-center">
            <Icon icon="mdi:account" class="mr-2" style="font-size: 2rem;" />
            <p>Je suis Quentin Altieri, un développeur Full Stack passionné par le développement web et mobile.</p>
        </div>
        <div class="flex items-center">
            <Icon icon="mdi:school" class="mr-2" style="font-size: 2rem;" />
            <p>Diplômé d'un Master CTO & Tech Lead.</p>
        </div>
        <div class="flex items-center">
            <Icon icon="mdi:code-tags" class="mr-2" style="font-size: 2rem;" />
            <p>Compétences : TypeScript, Angular, .NET, React/Next, Node.js.</p>
        </div>
        <div class="flex space-x-4">
            <a href="https://github.com/quentalt" target="_blank">
                <Button class="bg-black text-white">
                    <Icon icon="ci:github" />
                </Button>
            </a>
            <a href="https://www.linkedin.com/in/quentin-altieri/" target="_blank">
                <Button class="bg-black text-white">
                    <Icon icon="akar-icons:linkedin-fill" />
                </Button>
            </a>
            <a href="mailto:quentin.altieri@gmail.com" target="_blank">
                <Button class="bg-black text-white">
                    <Icon icon="mdi:email" />
                </Button>
            </a>
        </div>
    </div>
</section>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');

    :global(html) {
        background-color: #f5f5f5;
        font-family: 'M PLUS Rounded 1c', Arial, sans-serif;
        color: #333;
    }

    .mr-2 {
        margin-right: 0.5rem;
    }

    .space-x-4 > * + * {
        margin-left: 1rem;
    }

    .bg-black {
        background-color: #000;
    }

    .text-white {
        color: #fff;
    }
</style>