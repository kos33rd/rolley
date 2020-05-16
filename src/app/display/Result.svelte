<script>
  export let result = ''
</script>

<style>

  .result {
    align-self: flex-end;
    flex: 1;
    position: relative;
    margin: 0 64px;
    text-transform: uppercase;
    font-family: 'dseg-bold', sans-serif;
    font-weight: 400;
    font-size: 56px;
    color: #111;
  }

  .result:before {
    content: "~.~.~.~.~.~.~.~.~.~.~.~.";
    position: absolute;
    opacity: 0.05;
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 800px) {
    .result {
      font-size: 6vw;
      margin: 0 8vw;
    }
  }

</style>

<div class='result'>
  {result.padStart(12, '!')}
</div>
