input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 16; index++) {
        turn_on_for(1, 200)
        turn_off_for(1, 800)
    }
    for (let index = 0; index < 4; index++) {
        turn_on_for(2, 500)
        turn_off_for(2, 500)
        for (let index = 0; index < 4; index++) {
            turn_on_for(2, 200)
            turn_off_for(2, 50)
            turn_on_for(2, 200)
            turn_off_for(2, 500)
        }
        turn_on_for(2, 750)
        turn_off_for(2, 250)
    }
    for (let index = 0; index < 16; index++) {
        pins.analogWritePin(AnalogPin.P3, 256)
        basic.pause(250)
        pins.analogWritePin(AnalogPin.P3, 512)
        basic.pause(250)
        pins.analogWritePin(AnalogPin.P3, 768)
        turn_on_for(3, 250)
    }
    for (let index = 0; index < 16; index++) {
        turn_on_for(4, 800)
        turn_off_for(4, 200)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
})
function turn_on_for (color: number, s: number) {
    if (color == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(s)
    } else if (color == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(s)
    } else if (color == 3) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(s)
    } else {
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(s)
    }
}
function turn_off_for (color: number, s: number) {
    if (color == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(s)
    } else if (color == 2) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(s)
    } else if (color == 3) {
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(s)
    } else {
        pins.digitalWritePin(DigitalPin.P4, 0)
        basic.pause(s)
    }
}
let v = 0
for (let index = 0; index < 1023; index++) {
    pins.analogWritePin(AnalogPin.P1, v)
    v += 1
    control.waitMicros(12000)
}
basic.showString("rhythm")
