/* eslint-disable no-undef */
const enforcePomodoro = require('../index')

jest.useFakeTimers()

describe('totalSetTimeout', () => {
  it('initiates sessions and breaks consecutively for 15 minutes', () => {
    enforcePomodoro(5, 2)

    jest.advanceTimersByTime(15 * 60 * 1000)

    expect(setTimeout).toHaveBeenCalledTimes(5)
  })
})
