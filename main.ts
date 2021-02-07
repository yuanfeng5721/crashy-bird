input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.play()
    bird.change(LedSpriteProperty.Y, -1)
    basic.pause(300)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.giggle.play()
    bird.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    music.stopAllSounds()
})
let emptyObstacleY = 0
let ticks = 0
let bird: game.LedSprite = null
let score = 0
let index = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            soundExpression.sad.play()
            game.gameOver()
        } else {
            score = score + 1
            game.setScore(score)
        }
    }
    ticks += 1
    basic.pause(800)
})
