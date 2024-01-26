<script>
  import Navbar from "$lib/components/navbar.svelte";
  import SiteWideMessage from "$lib/components/site_wide_message.svelte";
</script>

<svelte:head>
  <link rel="shortcut icon" href="/barchart.svg" type="image/svg" />
</svelte:head>

<div class="font-sans min-h-100vh colbase flex flex-col">
  <SiteWideMessage></SiteWideMessage>
  <Navbar></Navbar>
  <slot><!-- optional fallback --></slot>
</div>
