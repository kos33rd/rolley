const crypto = self.crypto || self.msCrypto

onmessage = ({ data: { dice, multiplier } }) => {
  console.log('Worker received command', `Roll ${multiplier}d${dice}`)

  if (!dice) {
    postMessage({ status: 'success', data: '' })
    return
  }


  try {
    const randomValuesArray = new Uint8Array(multiplier)

    crypto.getRandomValues(randomValuesArray);

    const randomResult = randomValuesArray.reduce((acc, val) =>
      acc + Math.ceil(dice * val / Math.pow(2, 8 * Uint8Array.BYTES_PER_ELEMENT))
    , 0)

    // To make more in-game suspense
    setTimeout(() =>
      postMessage({ status: 'success', data: randomResult.toString() }),
      2500
    )

  } catch (e) {
    postMessage({ status: 'error', data: 'Calculation error' })

  }
}
