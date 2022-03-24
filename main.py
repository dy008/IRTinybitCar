ir = 0

def on_ir_callbackuserv2(message):
    global ir
    ir = message
    if message == MbitIR.IR_KeyValue(MbitIR.enIRButton.UP):
        ir = 1
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.DOWN):
        ir = 2
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.LEFT):
        ir = 3
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.RIGHT):
        ir = 4
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.SPIN_LEFT):
        ir = 5
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.SPIN_RIGHT):
        ir = 6
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.POWER):
        ir = 7
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.LIGHT):
        ir = 8
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.BEEP):
        ir = 9
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.ADD):
        ir = 10
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.ZERO):
        ir = 11
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.MINUS):
        ir = 12
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.ONE):
        ir = 13
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.TWO):
        ir = 14
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.THREE):
        ir = 15
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.FOUR):
        ir = 16
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.FIVE):
        ir = 17
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.SIX):
        ir = 18
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.SEVEN):
        ir = 19
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.EIGHT):
        ir = 20
    elif message == MbitIR.IR_KeyValue(MbitIR.enIRButton.NINE):
        ir = 21
MbitIR.IR_callbackUserV2(on_ir_callbackuserv2)

def Avoidmode():
    if Tinybit.Ultrasonic_Car() < 15:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINLEFT, 90)
        basic.pause(400)
    else:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 100)
def Horseled():
    Tinybit.RGB_Car_Program().set_brightness(255)
    Tinybit.RGB_Car_Program().set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    Tinybit.RGB_Car_Program().show()
    basic.pause(100)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().set_pixel_color(1, neopixel.colors(NeoPixelColors.GREEN))
    Tinybit.RGB_Car_Program().show()
    basic.pause(100)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().set_pixel_color(2, neopixel.colors(NeoPixelColors.BLUE))
    Tinybit.RGB_Car_Program().show()
    basic.pause(100)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().show()
Tinybit.RGB_Car_Big(Tinybit.enColor.RED)

def on_forever():
    global ir
    if ir == 1:
        ir = 0
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 150)
        basic.pause(200)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    elif ir == 2:
        ir = 0
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, 150)
        basic.pause(200)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    elif ir == 3:
        ir = 0
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_LEFT, 150)
        basic.pause(200)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    elif ir == 4:
        ir = 0
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RIGHT, 150)
        basic.pause(200)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    elif ir == 5:
        ir = 0
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINLEFT, 150)
        basic.pause(200)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    elif ir == 6:
        ir = 0
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINRIGHT, 150)
        basic.pause(200)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    elif ir == 7:
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        Tinybit.RGB_Car_Program().clear()
        Tinybit.RGB_Car_Program().show()
    elif ir == 8:
        Tinybit.RGB_Car_Big(Tinybit.enColor.WHITE)
    elif ir == 9:
        ir = 0
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    elif ir == 10:
        Tinybit.RGB_Car_Big(Tinybit.enColor.RED)
    elif ir == 11:
        Tinybit.RGB_Car_Big(Tinybit.enColor.GREEN)
    elif ir == 12:
        Tinybit.RGB_Car_Big(Tinybit.enColor.BLUE)
    elif ir == 13:
        basic.show_number(1)
    elif ir == 14:
        basic.show_number(2)
    elif ir == 15:
        basic.show_number(3)
    elif ir == 16:
        basic.show_number(4)
    elif ir == 17:
        basic.show_number(5)
    elif ir == 18:
        basic.show_number(6)
    elif ir == 19:
        basic.show_number(7)
    elif ir == 20:
        basic.show_number(8)
    elif ir == 21:
        basic.show_number(9)
basic.forever(on_forever)
