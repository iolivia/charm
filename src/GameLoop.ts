import * as Matter from "matter-js";

function createEngine(disableGravity: boolean = true): Matter.Engine {
    // create an engine
    const localEngine = Matter.Engine.create();

    // disable gravity
    if (disableGravity) {
        localEngine.world.gravity.y = 0;
    }

    return localEngine;
}

function createRenderer(localEngine: Matter.Engine): Matter.Render {
    // create a renderer
    const renderer = Matter.Render.create({
        element: document.body,
        engine: localEngine,
        options: {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            wireframes: false
        }
    });

    return renderer;
}

function enableMouse(localEngine: Matter.Engine) {
    let mouseConstraint = Matter.MouseConstraint.create(localEngine, {
        mouse: Matter.Mouse.create(document.body)
    });
    Matter.World.add(localEngine.world, mouseConstraint);
}

export class GameLoop {

    public run(scenario: (engine: Matter.Engine, renderer: Matter.Render) => void) {
        // Setup
        const engine = createEngine(false);
        const renderer = createRenderer(engine);
        enableMouse(engine);

        // Run scenario
        scenario(engine, renderer);
    
        // Run
        Matter.Engine.run(engine);
        Matter.Render.run(renderer);
    }
}