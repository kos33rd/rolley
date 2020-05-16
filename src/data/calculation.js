import { derived } from 'svelte/store'
import { dice, multiplier, result } from './stores'
import { startLoading, stopLoading } from './loading'

let taskId = 0

const diceAndMultiplier = derived(
  [dice, multiplier],
  ([dice, multiplier]) => [dice, multiplier]
)

try {
  const calculationWorker = new Worker('./calculationWorker.js')

  diceAndMultiplier.subscribe(([dice, multiplier]) => {
    if (dice.value) {
      startLoading()
      taskId++
      calculationWorker.postMessage({ dice: dice.value, multiplier: multiplier.value || 1, taskId })
      console.log(`Sent task #${taskId}`)
    }
  })

  calculationWorker.onmessage = ({ data: { status, data, taskId: completedTaskId } }) => {
    console.log(`Received complete task #${completedTaskId}`)
    stopLoading()
    if (status === 'success') {
      result.set(data)
    } else {
      result.set('Error')
    }
  }
} catch {
  result.set('Worker!Error')
}
