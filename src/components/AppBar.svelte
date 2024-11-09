<script>
    import {Avatar, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import {page} from "$app/stores";

    function isActive(path) {
        return $page.url.pathname === path ? 'active' : '';
    }
</script>

<Navbar>
    <NavBrand href="/">
        <Avatar src="/photo.jpg" alt="Votre Photo" class="rounded-full w-12 h-12 object-cover shadow-lg" />
    </NavBrand>
    <NavHamburger  />
    <NavUl >
        <NavLi href="/" class="nav-link {isActive('/')}">Home</NavLi>
        <NavLi href="/projects" class="nav-link {isActive('/projects')}">Projects</NavLi>
        <NavLi href="/contact" class="nav-link {isActive('/contact')}">Contact</NavLi>
    </NavUl>
</Navbar>

<style lang="postcss">
    :global(.nav-link) {
        color: #007acc;
    }

    :global(.nav-link.active) {
        color: #ff0000;
    }


</style>