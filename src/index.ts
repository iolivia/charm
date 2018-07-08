import * as Matter from "matter-js";
import { GameLoop } from "./GameLoop";
//import { scenario } from "./scenarios/CirclesScenario";
import { scenario } from "./scenarios/EmitterScenario";

function main(scenario: (localEngine: Matter.Engine, renderer: Matter.Render) => void) {
    let gameLoop = new GameLoop();
    gameLoop.run(scenario);
} 

main(scenario);