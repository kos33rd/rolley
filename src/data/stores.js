import { writable, derived } from 'svelte/store'

export const dice = writable('')
export const multiplier = writable('')

export const command = derived(
  [dice, multiplier],
  ([dice, multiplier]) => `${multiplier || ''}${dice ? `d${dice}` : ''}`
)

export const result = writable('')
