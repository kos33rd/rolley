import { dice, multiplier, result } from './stores'
import { derived } from 'svelte/store'

const diceAndMultiplier = derived([dice, multiplier], ([dice, multiplier]) => [dice, multiplier])

const PROGRESS_SYMBOLS = [
  '/', '-', '\\', '|'
]

let loadingTimer
const startLoading = () => {
  let cnt = 0

  loadingTimer = setInterval(() => {
    cnt++
    result.set(PROGRESS_SYMBOLS[cnt%PROGRESS_SYMBOLS.length])
  }, 100)

}

const stopLoading = () => clearInterval(loadingTimer)


try {
  const calculationWorker = new Worker('./calculationWorker.js')

  diceAndMultiplier.subscribe(([dice, multiplier]) => {
    if (dice) {
      startLoading()
      calculationWorker.postMessage({ dice, multiplier: multiplier || 1 })
    }
  })

  calculationWorker.onmessage = ({ data: { status, data } }) => {
    stopLoading()
    if (status === 'success') {
      result.set(data)
    } else {
      result.set('Error')
    }

  }
} catch {
  result.set('Worker Error')
}
