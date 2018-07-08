import * as Matter from "matter-js";
import * as Random from "random-number";
import { Particle } from "../Particle";

function generateCircles(engine: Matter.Engine, renderer: Matter.Render) {

    // create the ground
    const ground = Matter.Bodies.rectangle(400, 800, 1500, 200, { isStatic: true });
    Matter.World.addBody(engine.world, ground);

    // create particles
    const particleCount = 50;

    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    
    for (let i = 0; i < particleCount; i++) {

        // Options
        const particleOptions = {
            radiusMin: 8,
            radiusMax: 35,
            xMin: 0,
            xMax: width,
            yMin: 0,
            yMax: height,
            restitution: 0.7,
            density: 0.5,
            velocityMin: 1,
            velocityMax: 5
        };

        // Generate particle
        const particle = Particle.createCircle(particleOptions);

        // Add it to the world
        Matter.World.addBody(engine.world, particle.body);
    }
}
export { generateCircles as scenario };
