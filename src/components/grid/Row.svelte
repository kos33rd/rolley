<style>

  :root {
    --fluid-margin: 30px;
  }

  div {
    box-sizing: border-box;
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    flex-wrap: wrap;
    transition: margin-left, margin-right 0.1s linear 0s;

    margin-left: var(--fluid-margin);
    margin-right: var(--fluid-margin);
  }
</style>

<div>
  <slot />
</div>
