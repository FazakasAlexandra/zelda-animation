import { Sprite } from './classes/Sprite.js'
import { Canvas } from './classes/Canvas.js'

let mapIndex = 0
const map = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
    0, 0, 3, 0, 2, 2, 2, 2, 0, 0,
    0, 2, 2, 2, 2, 0, 0, 2, 0, 0,
    0, 2, 0, 0, 0, 0, 0, 2, 2, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]
let w = 50
let h = 50

const canvas = new Canvas('canvas')
const context = canvas.getContext()

const images = {
    cloud: './assets/cloud.png',
    earth: "./assets/grass.jpg",
    sushi: './assets/sushi.png',
    princess: './assets/zelda.png',
    brick: "http://www.tigrisgames.com/wall.png",
}

let princess = new Sprite(images.princess, 40, 40, false, context)
let earth = new Sprite(images.earth, w, h, false, context);
let cloud = new Sprite(images.cloud, w, h, false, context);
let brick = new Sprite(images.brick, w, h, false, context);
let sushi = new Sprite(images.sushi, 35, 35, false, context);

function loop() {
    setInterval(() => {

        mapIndex = 0

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++, mapIndex++) {
                let tileX = x * w
                let tileY = y * h

                if (map[mapIndex] === 1) {
                    earth.draw(tileX, tileY)
                }

                if (map[mapIndex] === 2) {
                    brick.draw(tileX, tileY)
                }

                if (map[mapIndex] === 0) {
                    context.fillStyle = "#66b3ff";
                    context.fillRect(tileX, tileY, 50, 50);

                    if (Math.floor(Math.random() < 0.05)) {
                        cloud.draw(tileX, tileY)
                    }
                }

                if (map[mapIndex] === 3) {
                    context.fillStyle = "#66b3ff";
                    context.fillRect(tileX, tileY, 50, 50);

                    if (Math.floor(Math.random() < 0.50)) {
                        sushi.draw(tileX, tileY)
                    }

                }
            }

        }

        princess.drawAnimated(289, 400, [0, 1, 2])
        //princess.drawAnimated(50,50,[0,1,2])
        //princess.drawAnimated(50,50,[4,5,6])
        //princess.drawAnimated(50,50,[8,9,10])      
        //princess.drawAnimated(50,50,[12,13,14])

    }, 500);

}

loop()
