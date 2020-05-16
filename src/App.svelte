<script>
  import Layout from './layout/Layout.svelte'
  import Calculator from './app/Calculator.svelte'
</script>

<style>

  @font-face {
    font-family: "dseg";
    src: url("assets/fonts/DSEG14ClassicMini-Italic.woff") format('woff');
  }

  @font-face {
    font-family: "dseg-bold";
    src: url("assets/fonts/DSEG14ClassicMini-BoldItalic.woff") format('woff');
    font-weight: bold;
  }

</style>

<Layout>
  <Calculator/>
</Layout>
