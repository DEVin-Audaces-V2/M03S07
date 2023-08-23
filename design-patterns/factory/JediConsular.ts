import Jedi from "./Jedi";

export default class JediConsular implements Jedi {

    whoAmI() {
        return "I am a Jedi Consular";
    }

    attack(): string {
        return 'ataque!!!';
    }

}