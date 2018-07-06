import * as Matter from "matter-js";
import * as Random from "random-number";
import { Particle } from "./Particle";

// module aliases
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
});

// create the ground
const ground = Bodies.rectangle(400, 800, 1500, 200, { isStatic: true });

// create particles
const particles = [];
const bodies = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
    // generate a body
    const bodyWidth = 30;
    const bodyHeight = 30;
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
    console.log(`Creating particle with x=${x}, y=${y}, w=${bodyWidth}, h=${bodyHeight}`);
    const body = Bodies.rectangle(x, y, bodyWidth, bodyHeight);
    const particle = new Particle(body);
    particles.push(particle);
    bodies.push(body);
}

// add all of the bodies to the world
World.add(engine.world, [ground, ...bodies]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);