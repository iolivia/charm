import * as Matter from "matter-js";
import * as Random from "random-number";
import { Particle } from "./Particle";

const colors = [
    "#A52A2A",
    "#FF1493",
    "#FF6347",
    "#9ACD32",
    "#F5DEB3",
    "#32CD32",
    "#00CED1",
    "#A9A9A9",
];

function getRandomColor(): String {
    const randomIndex = Random({
        min: 0,
        max: colors.length - 1,
        integer: true
    });
    const color = colors[randomIndex];

    console.log(`generated index ${randomIndex} and color ${color}`);

    return color;
}

function generateCircles(engine: Matter.Engine, renderer: Matter.Render) {

    // create the ground
    const ground = Matter.Bodies.rectangle(400, 800, 1500, 200, { isStatic: true });
    Matter.World.addBody(engine.world, ground);

    // create particles
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        // generate a body
        const radius = Random({
            min: 8,
            max: 35,
            integer: true
        });
        const x = Random({
            min: 0,
            max: document.body.clientWidth,
            integer: true
        });
        const y = Random({
            min: 0,
            max: document.body.clientHeight,
            integer: true
        });
        console.log(`Creating particle with x=${x}, y=${y}, r=${radius}`);
        const options = {
            render: {
                fillStyle: getRandomColor().toString(),
                strokeStyle: "black",
                lineWidth: 1
            }
        };
        const body = Matter.Bodies.circle(x, y, radius, options);
        body.restitution = 0.7;
        body.density = 0.5;
        
        const velocity = Random({
            min: 1,
            max: 5,
            integer: false
        });
        Matter.Body.setAngularVelocity(body, velocity);
        
        const particle = new Particle(body);
        particles.push(particle);

        Matter.World.addBody(engine.world, body);
    }
}

export {generateCircles as scenario};