/* eslint-disable no-undef */
const enforcePomodoro = require('../index')

jest.useFakeTimers()

describe('pauseSetTimeout', () => {
  it('starts the pause', () => {
    enforcePomodoro(5, 2)

    jest.advanceTimersByTime(5 * 60 * 1000)

    expect(setTimeout).toHaveBeenCalledTimes(2)

    expect(setTimeout).toHaveBeenNthCalledWith(
      2,
      expect.any(Function),
      2 * 60 * 1000
    )
  })
})
