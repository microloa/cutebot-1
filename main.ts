input.onButtonPressed(Button.A, function () {
    if (stop == 0) {
        stop = 1
        basic.showIcon(IconNames.Sad)
    } else {
        stop = 0
        basic.showIcon(IconNames.Happy)
    }
})
let stop = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (stop == 1) {
        cuteBot.stopcar()
    } else {
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(100, 40)
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(40, 100)
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
    }
})
