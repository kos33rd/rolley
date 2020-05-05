import { writable } from 'svelte/store'

export const command = writable('')

export const result = writable('To_be_done')

// TODO: Rewrite/remove this stub
const PROGRESS_SYMBOLS = [
  '/', '-', '\\', '|'
]
let cnt = 0

setInterval(() => {
  cnt++
  result.set(`To_be_done_${PROGRESS_SYMBOLS[cnt%PROGRESS_SYMBOLS.length]}`)
}, 200)
