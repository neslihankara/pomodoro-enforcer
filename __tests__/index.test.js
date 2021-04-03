const enforcePomodoro = require("../index");

jest.useFakeTimers();

describe("index", () => {
  it("starts the session and waits for 5 minutes to start the break", () => {
    enforcePomodoro(5, 2);

    expect(setTimeout).toHaveBeenCalled();

    expect(setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      5 * 60 * 1000
    );
  });
});
