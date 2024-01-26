<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import DarkModeButton from "./dark_mode_button.svelte";

  type Item = {
    name: string;
    path: string;
    isActive: boolean;
  };

  let defaultItems: Item[] = [
    { name: "Home", path: "/", isActive: false },
    { name: "Projects", path: "/projects", isActive: false },
    { name: "About Me", path: "/about", isActive: false },
  ];

  $: items = defaultItems.map((i) => {
    return {
      ...i,
      isActive: i.path === $page.url.pathname,
    };
  });

  let menuOpen = false;
  function openMenu() {
    menuOpen = true;
  }
  function closeMenu() {
    menuOpen = false;
  }

  onNavigate(() => {
    closeMenu();
  });
</script>

<div
  class="border-b border-b-solid border-b-border colpopover shadow flex gap4 justify-between p4"
>
  <button
    class="link border-none bg-transparent block md:hidden"
    on:click={openMenu}
  >
    <div class="i-carbon-menu text-3xl"></div>
  </button>

  <!-- left items container show as curtain in small screens -->
  <div
    class="colbase h-screen md:h-fit top-0 left-0 z-100 w-0 md:w-fit absolute md:relative transition-width overflow-hidden bg-opacity-98"
    class:w-screen={menuOpen}
  >
    <!-- close button -->
    <button
      class="link absolute top-0 left-0 border-none bg-transparent m4 md:hidden"
      on:click={closeMenu}
    >
      <div class="i-carbon-close text-3xl"></div>
    </button>
    <!-- menu -->
    <div
      class="gap4 flex h-full flex-col md:flex-row items-center justify-center"
    >
      {#each items as item}
        <a
          href={item.path}
          class="link text-xl"
          class:font-bold={item.isActive}
          class:brightness-120={item.isActive}>{item.name}</a
        >
      {/each}
    </div>
  </div>

  <div class="flex gap4">
    <!-- email -->
    <a href="mailto:ankur@paudel.me" aria-label="Email" class="link">
      <div class="i-carbon-email text-3xl"></div>
    </a>

    <!-- link to github -->
    <a
      target="_blank"
      href="https://github.com/a-paudel"
      aria-label="Github"
      class="link"><div class="i-carbon-logo-github text-3xl"></div></a
    >
    <!-- link to linkedin -->
    <a
      target="_blank"
      href="https://www.linkedin.com/in/ankurpaudel/"
      aria-label="LinkedIn"
      class="link"><div class="i-carbon-logo-linkedin text-3xl"></div></a
    >

    <!--  -->
    <DarkModeButton></DarkModeButton>
  </div>
</div>
