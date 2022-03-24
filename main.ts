MbitIR.IR_callbackUserV2(function (message) {
    ir = message
    if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Up)) {
        ir = 1
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Down)) {
        ir = 2
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Left)) {
        ir = 3
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Right)) {
        ir = 4
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.SpinLeft)) {
        ir = 5
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.SpinRight)) {
        ir = 6
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Power)) {
        ir = 7
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Light)) {
        ir = 8
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Beep)) {
        ir = 9
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Add)) {
        ir = 10
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Zero)) {
        ir = 11
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Minus)) {
        ir = 12
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.One)) {
        ir = 13
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Two)) {
        ir = 14
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Three)) {
        ir = 15
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Four)) {
        ir = 16
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Five)) {
        ir = 17
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Six)) {
        ir = 18
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Seven)) {
        ir = 19
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Eight)) {
        ir = 20
    } else if (message == MbitIR.IR_KeyValue(MbitIR.enIRButton.Nine)) {
        ir = 21
    }
})
function Avoidmode () {
    if (Tinybit.Ultrasonic_Car() < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 90)
        basic.pause(400)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
}
function Horseled () {
    Tinybit.RGB_Car_Program().setBrightness(255)
    Tinybit.RGB_Car_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Tinybit.RGB_Car_Program().show()
    basic.pause(100)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    Tinybit.RGB_Car_Program().show()
    basic.pause(100)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    Tinybit.RGB_Car_Program().show()
    basic.pause(100)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().show()
}
let ir = 0
Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
basic.showLeds(`
    . # # # .
    # . . . .
    . # # . .
    . . . # .
    # # # . .
    `)
Horseled()
basic.forever(function () {
    if (ir == 1) {
        ir = 0
        Horseled()
        Avoidmode()
    } else if (ir == 2) {
        ir = 0
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 150)
        Horseled()
        basic.pause(200)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (ir == 3) {
        ir = 0
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 150)
        basic.pause(200)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (ir == 4) {
        ir = 0
        Horseled()
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 150)
        basic.pause(200)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (ir == 5) {
        ir = 0
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 150)
        basic.pause(200)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (ir == 6) {
        ir = 0
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 150)
        basic.pause(200)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (ir == 7) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        Tinybit.RGB_Car_Program().clear()
        Tinybit.RGB_Car_Program().show()
    } else if (ir == 8) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    } else if (ir == 9) {
        ir = 0
        music.playTone(262, music.beat(BeatFraction.Whole))
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (ir == 10) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    } else if (ir == 11) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    } else if (ir == 12) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    } else if (ir == 13) {
        basic.showNumber(1)
    } else if (ir == 14) {
        basic.showNumber(2)
    } else if (ir == 15) {
        basic.showNumber(3)
    } else if (ir == 16) {
        basic.showNumber(4)
    } else if (ir == 17) {
        basic.showNumber(5)
    } else if (ir == 18) {
        basic.showNumber(6)
    } else if (ir == 19) {
        basic.showNumber(7)
    } else if (ir == 20) {
        basic.showNumber(8)
    } else if (ir == 21) {
        basic.showNumber(9)
    }
})
