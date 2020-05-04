<script>
  import Row from '../../components/grid/Row.svelte'
  import Col from '../../components/grid/Col.svelte'
  import { command } from '../../data/stores'

  let currentCommand
  const unsubscribe = command.subscribe(value => {
    currentCommand = value;
  });

</script>

<style>
  .display {
    flex: 1;
    height: 290px;
    margin-bottom: 16px;
    background: transparent url('../../assets/display.svg') no-repeat;
  }

  .model {
    text-transform: uppercase;
    font-family: 'Play', sans-serif;
    margin: 0 0 32px 48px;
    font-weight: 400;
    font-size: 24px;
    color: #111;
  }

  .command {
    margin: 32px;
    text-transform: uppercase;
    font-family: 'Play', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #111;
  }
</style>

<Row>
  <Col md='12'>
    <div class='display'>
      <div class='command'>
        {currentCommand}
      </div>
      <div class='result'>

      </div>
    </div>
  </Col>
</Row>
<Row>
  <Col md='12'>
    <h2 class='model'>mv 1.0</h2>
  </Col>
</Row>
