// Right
input.onPinPressed(TouchPin.P0, function () {
    if (action == 0) {
        makerbit.clearLcd1602()
        game.addScore(1)
        action = -1
    } else {
        makerbit.clearLcd1602()
        action = -2
    }
})
// Micheal Jackson move radioed from hand
radio.onReceivedNumber(function (receivedNumber) {
    if (action == 4) {
        makerbit.clearLcd1602()
        game.addScore(1)
        action = -1
    } else {
        makerbit.clearLcd1602()
        action = -2
    }
})
// Down
input.onButtonPressed(Button.A, function () {
    if (action == 3) {
        makerbit.clearLcd1602()
        game.addScore(1)
        action = -1
    } else {
        makerbit.clearLcd1602()
        action = -2
    }
})
// Up
input.onPinPressed(TouchPin.P2, function () {
    if (action == 2) {
        makerbit.clearLcd1602()
        game.addScore(1)
        action = -1
    } else {
        makerbit.clearLcd1602()
        action = -2
    }
})
// Left
input.onPinPressed(TouchPin.P1, function () {
    if (action == 1) {
        makerbit.clearLcd1602()
        game.addScore(1)
        action = -1
    } else {
        makerbit.clearLcd1602()
        action = -2
    }
})
let action = 0
radio.setGroup(7)
makerbit.showStringOnLcd1602("DDR ShakeIT Up", makerbit.position1602(LcdPosition1602.Pos1), 16)
basic.pause(5000)
action = -1
game.startCountdown(1000000)
makerbit.clearLcd1602()
basic.forever(function () {
    // Display text for game over
    if (action == -2) {
        makerbit.showStringOnLcd1602("GAME OVER", makerbit.position1602(LcdPosition1602.Pos4), 16)
        makerbit.showStringOnLcd1602("SCORE:", makerbit.position1602(LcdPosition1602.Pos20), 16)
        makerbit.showStringOnLcd1602("" + (game.score()), makerbit.position1602(LcdPosition1602.Pos29), 16)
    }
    if (action == -1) {
        action = randint(0, 4)
    }
    // Display text for the moves selected at random
    if (action == 0) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("RIGHT", makerbit.position1602(LcdPosition1602.Pos6), 16)
    } else if (action == 1) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("LEFT", makerbit.position1602(LcdPosition1602.Pos6), 16)
    } else if (action == 2) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("UP", makerbit.position1602(LcdPosition1602.Pos8), 16)
    } else if (action == 3) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("DOWN", makerbit.position1602(LcdPosition1602.Pos6), 16)
    } else if (action == 4) {
        // This move is being radioed from the microcontroller
        // 
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("Micheal Jackson", makerbit.position1602(LcdPosition1602.Pos1), 16)
    }
})
