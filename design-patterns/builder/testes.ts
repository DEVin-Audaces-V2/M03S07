import Hero from "./Hero";
import HeroBuilder from "./HeroBuilder";


const heroi1 = new Hero('iron man', 'red', 40);
const heroi2 = new Hero('superman', 'blue', 30);

const heroi3 = new HeroBuilder()
    .withAge(30)
    .withName('batman')
    .withMaskColor('black')
    .build();
    