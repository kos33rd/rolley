<script>
  import SolarPanel from './solarPanel/SolarPanel.svelte'
  import Display from './display/Display.svelte'
  import Keyboard from './keyboard/Keyboard.svelte'
</script>

<style>

  div {
    max-width: 750px;
    height: 1024px;
    margin: 16px auto;
    padding: 16px;
    border: 4px solid #232429;
    border-radius: 24px;
    box-shadow:
    /* Left inner */
    inset 16px 0 10px -5px rgba(0,0,0,.4),

    /* Bottom inner */
    inset -10px -35px 8px -25px rgba(0,0,0,.3),

    /* Right inner */
    inset -18px 0 10px -5px rgba(0,0,0,.3),

    /* Outer */
    0 1px 1px 1px rgba(0, 0, 0, 0.22),
    0 2px 2px 2px rgba(0, 0, 0, 0.22),
    0 4px 4px 4px rgba(0, 0, 0, 0.22),
    0 8px 8px 8px rgba(0, 0, 0, 0.22),
    0 16px 16px 16px rgba(0, 0, 0, 0.22)

  ;
    background: white url(../assets/plastic.png);
  }
</style>

<div>
  <SolarPanel />
  <Display />
  <Keyboard />
</div>
