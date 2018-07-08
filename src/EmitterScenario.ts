import { Emitter } from "./Emitter"

function scenario(engine: Matter.Engine, renderer: Matter.Render) {

    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    let emitter = new Emitter(engine, width/2, height/2);
}

export { scenario };