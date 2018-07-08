import * as Matter from "matter-js";

class Emitter {

    private engine: Matter.Engine;
    private emitterBody: Matter.Body;

    constructor(engine: Matter.Engine, x: Number, y:Number) {
        this.engine = engine;
        this.emitterBody = this.createBody(x, y);
    }

    private createBody(x: Number, y:Number) {
        const bodyOptions = {
            render: {
                fillStyle: "red"
            },
            isStatic: true
        };

        let body = Matter.Bodies.circle(
            x as number, 
            y as number, 
            5,
            bodyOptions);

        Matter.World.addBody(this.engine.world, body);
            
        return body;
    }
}

export {Emitter};