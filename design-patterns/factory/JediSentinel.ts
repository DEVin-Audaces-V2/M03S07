import Jedi from "./Jedi";

export default class JediSentinel implements Jedi {

    whoAmI() {
        return "I am a Jedi Sentinel";
    }

    attack(): string {
        return 'ataque!!!';
    }

}