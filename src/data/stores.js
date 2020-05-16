import { writable, derived } from 'svelte/store'

export const dice = writable({ value: '', timestamp: new Date })
export const multiplier = writable({ value: '', timestamp: new Date })

export const command = derived(
  [dice, multiplier],
  ([dice, multiplier]) =>
    `${multiplier.value || ''}${dice.value ? `d${dice.value}` : ''}`
)

export const result = writable('')
