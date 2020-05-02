<script>
  import SolarPanel from './solarPanel/SolarPanel.svelte'
  import Display from './display/Display.svelte'
  import Keyboard from './keyboard/Keyboard.svelte'
</script>

<style>

  div {
    max-width: 750px;
    height: 750px;
    margin: 16px auto;
    padding: 16px;
    border-radius: 24px;
    box-shadow: inset 0 -8px 5px rgba(240, 240, 240, 0.8),
    inset 0 6px 4px rgba(255, 255, 255, 0.25),
    inset 0 2px 1px rgba(255, 255, 255, 0.25),
    inset 3px 0 3px rgba(255, 255, 255, 0.25),
    inset -4px 0 4px rgba(240, 240, 240, 0.75),
    0 1px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12),
    0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
    background: white url(../assets/plastic.png);
  }
</style>

<div>
  <SolarPanel />
  <Display />
  <Keyboard />
</div>
