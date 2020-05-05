
<script>
  import Row from '../../components/grid/Row.svelte'
  import Button from './Button.svelte'
  import { BUTTONS } from '../../data/constants'
  import { command } from '../../data/stores'


  const handleButtonClick = (button) => () => {
    if (button === BUTTONS.CLEAR) {
      command.set('')
    } else {
      command.update(() => button)
    }
  }


</script>

<section>
  <Row>
    <Button onClick={handleButtonClick(BUTTONS.X2)}>
      x2
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.X3)}>
      x3
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.X4)}>
      x4
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.CLEAR)}>
      C
    </Button>
  </Row>

  <Row>
    <Button onClick={handleButtonClick(BUTTONS.D100)}>
      d100
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.D12)}>
      d12
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.D10)}>
      d10
    </Button>
  </Row>

  <Row>
    <Button onClick={handleButtonClick(BUTTONS.D8)}>
      d8
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.D4)}>
      d4
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.D3)}>
      d3
    </Button>
  </Row>

  <Row>
    <Button onClick={handleButtonClick(BUTTONS.D20)}>
      d20
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.D6)}>
      d6
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.D2)}>
      d2
    </Button>
    <Button onClick={handleButtonClick(BUTTONS.EQUALS)}>
      =
    </Button>
  </Row>
</section>
