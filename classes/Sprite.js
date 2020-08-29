import { i2xy, xy2i } from '../utility.js'

export class Sprite {
    constructor(filename, w, h, is_pattern, context) {
        this.w = w
        this.h = h
        this.image = null
        this.pattern = null
        this.filename = filename
        this.is_pattern = is_pattern
        this.context = context
        this.framesIndex = 0
        this.currentFrame = 0
        this.checkImage()
    }

    checkImage() {
        if (this.filename != undefined && this.filename != "" && this.filename != null) {
            this.getImage()
            this.pattern = this.is_pattern ? this.context.createPattern(this.image, 'repeat') : null
            return
        }

        console.log("Unable to load sprite.");
    }

    getImage() {
        this.image = new Image();
        this.image.src = this.filename;
        this.image.onload = function (e) {
            console.log("img loaded");
        }
    }

    draw(x, y) {
        if (this.pattern) {
            console.log("pattern!");
            this.context.fillStyle = this.pattern;
            this.context.fillRect(x, y, this.w, this.h);

        } else {
            if (!this.w) {
                this.context.drawImage(this.image, x, y, this.image.width, this.image.height);
            } else {
                this.context.drawImage(this.image, x, y, this.w, this.h);

            }
        }
    };

    drawAnimated(x, y, frames) {
        //frameSets = [[1,2,3], 
        //             [4,5,6], 
        //             [7,8,9]]
        //frames = frameSets[frameSetsIndex] -> [1,2,3]
        //frame = frames[framesIndex]  
            this.framesIndex++

            if (this.framesIndex >= frames.length) {
                this.framesIndex = 0
            }

            this.currentFrame = frames[this.framesIndex]

            const res = i2xy(this.currentFrame, 4)
            
            const width = this.image.width / 3
            const height = this.image.height / 4;

            this.context.drawImage(this.image, res[0] * width, res[1] * height, width, height, x, y, 60, 60)
        }
    
}
