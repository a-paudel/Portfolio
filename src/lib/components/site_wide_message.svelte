<script lang="ts">
  import { env } from "$env/dynamic/public";
  let text = env.PUBLIC_BANNER_TEXT ?? null;
</script>

{#if text}
  <!-- content here -->
  <div class="bg-danger text-danger-foreground p2">
    <h4 class="m0 text-center">{text}</h4>
  </div>
{/if}
