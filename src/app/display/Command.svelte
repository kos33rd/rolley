<script>
  export let command = ''
</script>

<style>

  .command {
    position: relative;
    margin: 64px 0 44px 64px;
    min-height: 36px;
    text-transform: uppercase;
    font-family: 'dseg', sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: #111;
  }

  .command:before {
    content: "~.~.~.~.~.~.~.~.~.~.~.~.";
    position: absolute;
    opacity: 0.05;
    left: 0;
    top: 0;
  }
</style>

<div class='command'>
  {command}
</div>
