<script>
  import Col from '../../components/grid/Col.svelte'

  export let onClick = () => {}
</script>

<style>

  .button {
    position: relative;
    border-radius: 12px 12px 32px 32px;
    padding: 0 4px 10px 8px;
    height: 80px;
    width: 100%;

    background: linear-gradient(333.59deg, rgba(255, 255, 255, 0.499684) 13.73%, rgba(0, 0, 0, 0.5) 88.61%), #404049;
    background-blend-mode: overlay, normal;
    border: 3px solid rgba(21, 18, 18, 0.369141);
    box-sizing: border-box;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.256606),
    2px 0px 4px rgba(0, 0, 0, 0.5),
    -4px 4px 8px rgba(255, 255, 255, 0.155561),
    inset 2px 0px 2px rgba(239, 239, 239, 0.322467),
    inset 2px 2px 2px rgba(235, 235, 235, 0.295205),
    inset 0px -5px 3px rgba(51, 51, 51, 0.5)
  ;

    color: white;
    font-size: 40px;
    font-family: 'Play', sans-serif;
  }

  .button:active {
    margin-top: 3px;
    box-shadow: none;
    height: 76px;
  }

  .button:focus {
    outline: none;
  }

  .button:focus:before {
    content: " ";
    z-index: 2;
    position: absolute;
    top: 70%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: url(../../assets/hand.png);
    background-size: 100%;
  }


  .button-socket {
    margin-top: 32px;
    width: 100%;
    border-radius: 10px 10px 32px 32px;
    border: 2px solid #4d4d4d;
    background-color: #4d4d4d;
  }

  @media screen and (max-width: 800px) {
    .button {
      font-size: 6vw;
    }
    .button:focus:before {
      background: none;
    }
  }
</style>

<Col md='3'>
  <div class='button-socket'>
    <button class='button' on:click={onClick}>
      <slot />
    </button>
  </div>
</Col>
