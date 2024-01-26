<script lang="ts">
  import { onMount } from "svelte";

  // get darkMode from localStorage
  let darkMode = true;

  function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark");
  }

  // on start set darkMode
  onMount(() => {
    darkMode = JSON.parse(localStorage.getItem("darkMode") || "true");
    console.log(darkMode);

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
</script>

<!-- right items -->
<button
  on:click={toggleDarkMode}
  class="dark:i-carbon-light text-3xl link cursor-pointer dark:hover:i-carbon-light-filled i-carbon-asleep hover:i-carbon-asleep-filled"
>
</button>
