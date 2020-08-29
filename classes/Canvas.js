export class Canvas {
    constructor(canvasId){
        this.canvasId = canvasId
    }
    
    getContext() {
        this.canvas = document.getElementById(this.canvasId);
        this.context = canvas.getContext('2d');
        return this.context;
    }

    
}