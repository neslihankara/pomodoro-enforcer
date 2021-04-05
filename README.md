# pomodoro-enforcer

[![Build Status](https://travis-ci.com/neslihankara/pomodoro-enforcer.svg?branch=main)](https://travis-ci.com/neslihankara/pomodoro-enforcer)
[![Coverage Status](https://coveralls.io/repos/github/neslihankara/pomodoro-enforcer/badge.svg?branch=improve-library)](https://coveralls.io/github/neslihankara/pomodoro-enforcer?branch=improve-library)

A library that enforces Pomodoro to make sure that you are taking enough breaks while coding.

# Goal

Main goal of this library is to provide healthier workflows. Everyone knows that regular breaks save programmers' lives but no one really takes those breaks. So this library lets you integrate Pomodoro to your coding environment and prevents you from future errors due to fatigue.

# Usage

Install the library.

```bash
npm i pomodoro-enforcer

```

Import and call it in a file (example.js in this case). Then run that file in the terminal

```js
const pomodoroEnforcer = require("pomodoro-enforcer");

pomodoroEnforcer(sessionMinutes, pauseMinutes);
```

```bash
node example.js

```

# Future Work

This library is a work in progress. Feel free to contribute!

# License

MIT License

Copyright (c) 2021 Neslihan Kara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
