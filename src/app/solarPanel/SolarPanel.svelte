<script>
  import Row from '../../components/grid/Row.svelte'
  import Col from '../../components/grid/Col.svelte'
</script>
<style>
  .solar-panel {
    margin: 16px auto;
    width: 256px;
    height: 80px;
    background: transparent url(../../assets/solar_panel.svg) no-repeat;
    right: 120px;
  }

  .title {
    align-self: center;
    text-transform: uppercase;
    font-family: 'Play', sans-serif;
    font-weight: 700;
    font-size: 48px;
    margin: 0;
    color: #111;
  }
</style>

<Row>
  <Col md='8'>
    <h1 class='title'>
      Rolly
    </h1>
  </Col>
  <Col md='4'>
    <div class='solar-panel'></div>
  </Col>
</Row>
