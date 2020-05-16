<style>

  :root {
    --wide-margin: 30px;
    --tight-margin: 10px;
  }

  div {
    box-sizing: border-box;
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    flex-wrap: wrap;

    margin-left: var(--wide-margin);
    margin-right: var(--wide-margin);
  }


  @media screen and (max-width: 800px) {
    div {
      margin-left: var(--tight-margin);
      margin-right: var(--tight-margin);
    }
  }

</style>

<div>
  <slot />
</div>
