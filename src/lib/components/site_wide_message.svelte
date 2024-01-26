<script lang="ts">
  import { PUBLIC_SITE_WIDE_MESSAGE } from "$env/static/public";

  let text = PUBLIC_SITE_WIDE_MESSAGE;
</script>

{#if text.trim() !== ""}
  <!-- content here -->
  <div class="bg-danger text-danger-foreground p2">
    <h4 class="m0 text-center">{text}</h4>
  </div>
{/if}
