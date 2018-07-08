import * as Matter from "matter-js";
import * as Random from "random-number";
import { Particle } from "./Particle";
import { GameLoop } from "./GameLoop";

// module aliases
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

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

function generateCircles(localEngine: Matter.Engine, renderer: Matter.Render) {

    // create the ground
    const ground = Bodies.rectangle(400, 800, 1500, 200, { isStatic: true });
    World.addBody(localEngine.world, ground);

    // create particles
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        // generate a body
        const radius = Random({
            min: 5,
            max: 15,
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
        const body = Bodies.circle(x, y, radius, options);
        const density = 10;

        const velocity = Random({
            min: 10,
            max: 30,
            integer: false
        });
        Matter.Body.setAngularVelocity(body, velocity);
        Matter.Body.setDensity(body, density);

        const particle = new Particle(body);
        particles.push(particle);

        World.addBody(localEngine.world, body);
    }
}

function main(scenario: (localEngine: Matter.Engine, renderer: Matter.Render) => void) {
    let gameLoop = new GameLoop();
    gameLoop.run(scenario);
}

main(generateCircles);