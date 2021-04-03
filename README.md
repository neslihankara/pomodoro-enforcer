# pomodoro-enforcer

[![Build Status](https://travis-ci.com/neslihankara/pomodoro-enforcer.svg?branch=main)](https://travis-ci.com/neslihankara/pomodoro-enforcer)
[![Coverage Status](https://coveralls.io/repos/github/neslihankara/pomodoro-enforcer/badge.svg?branch=improve-library)](https://coveralls.io/github/neslihankara/pomodoro-enforcer?branch=improve-library)

A library that uses Pomodoro to make sure that you are taking enough breaks while coding.

# Usage

Install the library.

```
npm i pomodoro-enforcer

```

Import and call it in a file (example.js in this case). Then run that file in the terminal

```
const pomodoroEnforcer = require('pomodoro-enforcer')

pomodoroEnforcer(sessionMinutes, pauseMinutes)

```

```
$ node example.js

```
