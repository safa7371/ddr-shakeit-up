def on_gesture_logo_up():
    pass
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    pass
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_screen_down():
    pass
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_pin_pressed_p1():
    global action
    if action == 0 and input.is_gesture(Gesture.SCREEN_DOWN):
        music.ring_tone(784)
        game.add_score(1)
        action = -1
        music.stop_all_sounds()
    elif action == 1 and input.is_gesture(Gesture.LOGO_UP):
        music.ring_tone(784)
        game.add_score(1)
        action = -1
        music.stop_all_sounds()
    elif action == 2 and input.is_gesture(Gesture.TILT_LEFT):
        music.ring_tone(784)
        game.add_score(1)
        action = -1
        music.stop_all_sounds()
    else:
        soundExpression.sad.play()
        action = -2
        bluetooth.uart_write_string("GAME OVER")
        game.game_over()
        music.stop_all_sounds()
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

action = 0
bluetooth.start_uart_service()
basic.pause(5000)
soundExpression.twinkle.play()
action = -1
game.start_countdown(100000000)
bluetooth.uart_write_string("START GAME")
music.stop_all_sounds()

def on_forever():
    global action
    if action == -1:
        action = randint(0, 2)
    elif action == 0:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            """)
        bluetooth.uart_write_string("PUNCH")
    elif action == 1:
        basic.show_leds("""
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
        bluetooth.uart_write_string("UPPER CUT")
    elif action == 2:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            """)
        bluetooth.uart_write_string("BLOCK")
basic.forever(on_forever)
