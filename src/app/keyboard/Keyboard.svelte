
<script>
  import Row from '../../components/grid/Row.svelte'
  import Button from './Button.svelte'
</script>

<style>
</style>

<section>
  <Row>
    <Button>
      x2
    </Button>
    <Button md='3'>
      x3
    </Button>
    <Button>
      x4
    </Button>
    <Button>
      C
    </Button>
  </Row>

  <Row>
    <Button>
      d100
    </Button>
    <Button>
      d12
    </Button>
    <Button>
      d10
    </Button>
  </Row>

  <Row>
    <Button>
      d8
    </Button>
    <Button>
      d4
    </Button>
    <Button>
      d3
    </Button>
  </Row>

  <Row>
    <Button>
      d20
    </Button>
    <Button>
      d6
    </Button>
    <Button>
      d2
    </Button>
    <Button>
      =
    </Button>
  </Row>
</section>
