export default class Hero {

    private name : string;

    private maskColor : string;

    private age : number;

    private capeColor : string;

    private weapon : string;


    constructor(name = 'indefinido', maskColor = 'sem capa', age = 0, capeColor = 'red', weapon = 'revolver') {
        this.name = name;
        this.maskColor = maskColor;
        this.age = age;
        this.capeColor = capeColor;
        this.weapon = weapon;
    }

    
    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getMaskColor() {
        return this.maskColor;
    }

    setMaskColor(color: string) {
        this.maskColor = color;
    }

   getAge() {
        return this.age;
    }

    setAge(age:number) {
        this.age = age;
    }

    getCapeColor() {
        return this.capeColor;
    }

    getWeapon() {
        return this.weapon;
    }

}