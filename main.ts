let uwu = 0
input.onButtonPressed(Button.A, function () {
    uwuc()
})
input.onButtonPressed(Button.B, function () {
    uwuc()
})
function uwuc() {
    uwu = randint(1, 3)
    if (uwu == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (uwu == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (uwu == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
}

