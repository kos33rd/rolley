
<script>
  import Row from '../../components/grid/Row.svelte'
  import Button from './Button.svelte'
  import { BUTTONS } from '../../data/constants'
  import { command, dice, multiplier } from '../../data/stores'

  const handleClearClick = () => {
    dice.set('')
    multiplier.set('')
  }

  const handleDiceClick = (button) => () => {
    dice.update(() => button)
  }

  const handleMultiplierClick = (button) => () => {
    multiplier.update(() => button)
  }

</script>

<section>
  <Row>
    <Button onClick={handleMultiplierClick(BUTTONS.X2)}>
      x2
    </Button>
    <Button onClick={handleMultiplierClick(BUTTONS.X3)}>
      x3
    </Button>
    <Button onClick={handleMultiplierClick(BUTTONS.X4)}>
      x4
    </Button>
    <Button onClick={handleClearClick}>
      C
    </Button>
  </Row>

  <Row>
    <Button onClick={handleDiceClick(BUTTONS.D100)}>
      d100
    </Button>
    <Button onClick={handleDiceClick(BUTTONS.D12)}>
      d12
    </Button>
    <Button onClick={handleDiceClick(BUTTONS.D10)}>
      d10
    </Button>
  </Row>

  <Row>
    <Button onClick={handleDiceClick(BUTTONS.D8)}>
      d8
    </Button>
    <Button onClick={handleDiceClick(BUTTONS.D4)}>
      d4
    </Button>
    <Button onClick={handleDiceClick(BUTTONS.D3)}>
      d3
    </Button>
  </Row>

  <Row>
    <Button onClick={handleDiceClick(BUTTONS.D20)}>
      d20
    </Button>
    <Button onClick={handleDiceClick(BUTTONS.D6)}>
      d6
    </Button>
    <Button onClick={handleDiceClick(BUTTONS.D2)}>
      d2
    </Button>
    <Button onClick={handleDiceClick(BUTTONS.EQUALS)}>
      =
    </Button>
  </Row>
</section>
