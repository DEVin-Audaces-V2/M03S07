import Hero from './Hero';

export default class HeroBuilder {

    private hero = new Hero();


    build() : Hero {
        return this.hero;
    }


    withName(name : string) : HeroBuilder{
        this.hero.setName(name);
        return this;
    }

    withMaskColor(maskColor : string) : HeroBuilder {
        this.hero.setMaskColor(maskColor);
        return this;
    }

    withAge(age : number) : HeroBuilder {
        this.hero.setAge(age);
        return this;
    }

    // public HeroBuilder withCapeColor(String color) {
    //     hero.setCapeColor(color);
    //     return this;
    // }

    // public HeroBuilder withWeapon(String weapon) {
    //     hero.setWeapon(weapon);
    //     return this;
    // }

}