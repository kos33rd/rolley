import { result } from './stores'

const PROGRESS_SYMBOLS = [
  '/', '-', '\\', '|'
]

let processesCount = 0
let cnt = 0

export const startLoading = () => processesCount++
export const stopLoading = () => processesCount--

setInterval(() => {
  if (processesCount > 0) {
    cnt++
    result.set(PROGRESS_SYMBOLS[cnt % PROGRESS_SYMBOLS.length])
  }
}, 100)
