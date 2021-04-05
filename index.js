function pause (pauseMinutes, sessionMinutes) {
  console.log(`Take a break for ${pauseMinutes} minutes.\n`)
  setTimeout(
    () => study(sessionMinutes, pauseMinutes),
    pauseMinutes * 1000 * 60
  )
}

function study (sessionMinutes, pauseMinutes) {
  console.log(`${sessionMinutes} minute session begins now.\n`)
  setTimeout(
    () => pause(pauseMinutes, sessionMinutes),
    sessionMinutes * 1000 * 60
  )
}

module.exports = study
