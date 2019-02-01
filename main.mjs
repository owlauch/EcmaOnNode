import Cubo from "./Cubo";

let cubo = new Cubo;

class Main {
    constructor(cubo = new Cubo) {
        this.inicializacao();
    }

    inicializacao () {
        this.teste();
    }

    async teste() {
        try {
            let x = await cubo.teste(true);//<-- (Boolean) me mude aqui.
            console.log(`este -> ${x} demora mais chega!!!`);
        } catch (error) {
            console.log(error);
        }
    }
}
let main = new Main;