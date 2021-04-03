/* eslint-disable no-undef */
const enforcePomodoro = require('../index')

jest.useFakeTimers()

describe('studySetTimeout', () => {
  it('starts the session', () => {
    enforcePomodoro(5, 2)

    jest.advanceTimersByTime(4.9 * 60 * 1000)

    expect(setTimeout).toHaveBeenCalledTimes(1)

    expect(setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      5 * 60 * 1000
    )
  })
})
