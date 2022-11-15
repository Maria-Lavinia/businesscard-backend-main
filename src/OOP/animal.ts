import { Move } from "./move";

export class Animal implements Move {
    constructor (public name: string, public movemethod: string) {

    }
    run() {
     console.log(this.movemethod)
    }
    presentation(): void
    {
        console.log(this.name)
    }  
}