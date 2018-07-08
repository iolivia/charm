import * as Matter from "matter-js";
import * as Random from "random-number";
import { getRandomColor } from "./RandomColor";

class ParticleOptions {
    // Position
    public xMin: Number;
    public xMax: Number;
    public yMin: Number;
    public yMax: Number;
    public radiusMin: Number;
    public radiusMax: Number;

    // Body properties
    public restitution: Number;
    public density: Number;

    // Style
    public color?: string; // if no color is specified a random color will be used

    // Movement
    public velocityMin: Number;
    public velocityMax: Number;
}

class Particle {

    public body;

    constructor(body: Matter.Body) {
        this.body = body;
    }

    public static createCircle(options: ParticleOptions): Particle {
        // generate a body
        const radius = Random({
            min: options.radiusMin,
            max: options.radiusMax,
            integer: true
        });
        const x = Random({
            min: options.xMin,
            max: options.xMax,
            integer: true
        });
        const y = Random({
            min: options.yMin,
            max: options.yMax,
            integer: true
        });
        console.log(`Creating particle with x=${x}, y=${y}, r=${radius}`);
        const bodyOptions = {
            render: {
                fillStyle: getRandomColor().toString(),
                strokeStyle: "black",
                lineWidth: 1
            }
        };
        const body = Matter.Bodies.circle(x, y, radius, bodyOptions);
        body.restitution = options.restitution as number;
        body.density = options.density as number;

        const velocity = Random({
            min: options.velocityMin,
            max: options.velocityMax,
            integer: false
        });
        Matter.Body.setAngularVelocity(body, velocity);

        const particle = new Particle(body);

        return particle;
    }

}

export { Particle, ParticleOptions };