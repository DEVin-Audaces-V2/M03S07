import Jedi from './Jedi';
import JediConsular from './JediConsular';
import JediGuardian from './JediGuardian';
import JediSentinel from './JediSentinel';

export default class JediFactory {

    static getJedi(lightSaberColor: string) : Jedi {
        let jedi;

        switch (lightSaberColor) {
            case "green":
                jedi = new JediConsular();
                break;
            case "blue":
                jedi = new JediGuardian();
                break;
            case "yellow":
                jedi = new JediSentinel();
                break;
            default:
                throw new Error("Unrecognized lightsaber color, maybe it is a Sith disguised...");
        }

        return jedi;
    }

}