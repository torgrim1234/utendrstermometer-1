radio.setGroup(132)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(5000)
})
