import * as Matter from "matter-js";
import { GameLoop } from "./GameLoop";
import { scenario } from "./CirclesScenario";

function main(scenario: (localEngine: Matter.Engine, renderer: Matter.Render) => void) {
    let gameLoop = new GameLoop();
    gameLoop.run(scenario);
}

main(scenario);