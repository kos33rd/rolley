<script>
  export let md = 12;
</script>

<style>
  .col {
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .md-4 {
    flex-basis: calc(4 / 12 * 100%);
    max-width: calc(4 / 12 * 100%);
  }

  .md-8 {
    flex-basis: calc(8 / 12 * 100%);
    max-width: calc(8 / 12 * 100%);
  }

  .md-12 {
    flex-basis: calc(12 / 12 * 100%);
    max-width: calc(12 / 12 * 100%);
  }
</style>

<div class={`col md-${md}`}>
  <slot />
</div>
