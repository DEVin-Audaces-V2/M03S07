import Jedi from "./Jedi";

export default class JediGuardian implements Jedi {

    whoAmI() {
        return "I am a Jedi Guardian";
    }

    attack(): string {
        return 'ataque!!!';
    }

}