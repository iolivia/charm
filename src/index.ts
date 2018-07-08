import * as Matter from "matter-js";
import { GameLoop } from "./GameLoop";
//import { scenario } from "./CirclesScenario";
import { scenario } from "./EmitterScenario";

function main(scenario: (localEngine: Matter.Engine, renderer: Matter.Render) => void) {
    let gameLoop = new GameLoop();
    gameLoop.run(scenario);
}

main(scenario);