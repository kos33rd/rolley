<script>
  import Row from '../../components/grid/Row.svelte'
  import Col from '../../components/grid/Col.svelte'
  import { command, result } from '../../data/stores'
  import Command from './Command.svelte'
  import Result from './Result.svelte'

  let currentCommand
  let currentResult

  const unsubscribe = command.subscribe(value => {
    currentCommand = value
  });

  result.subscribe((value) => {
    currentResult = value
  })

</script>

<style>
  .display {
    display: flex;
    flex-direction: column;
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
</style>

<Row>
  <Col md='12'>
    <div class='display'>
      <Command command={currentCommand}/>
      <Result result={currentResult}/>
    </div>
  </Col>
</Row>
<Row>
  <Col md='12'>
    <h2 class='model'>mv 1.0</h2>
  </Col>
</Row>
