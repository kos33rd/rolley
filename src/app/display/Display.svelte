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
    position: relative;
    height: 0;
    padding-top: 44%;
    margin-bottom: 16px;
    background: transparent url('../../assets/display.svg') no-repeat;
  }
  .display-bevel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .model {
    text-transform: uppercase;
    font-family: 'Play', sans-serif;
    margin: 0 0 32px 48px;
    font-weight: 400;
    font-size: 24px;
    color: #111;
  }

  @media screen and (max-width: 800px) {
    .display {
      /*height: 32vw;*/
    }
    .model {
      margin-bottom: 8px;
    }
  }
</style>

<Row>
  <Col md='12'>
    <div class='display'>
      <div class='display-bevel'>
        <Command command={currentCommand}/>
        <Result result={currentResult}/>
      </div>
    </div>
  </Col>
</Row>
<Row>
  <Col md='12'>
    <h2 class='model'>mv 1.0</h2>
  </Col>
</Row>
