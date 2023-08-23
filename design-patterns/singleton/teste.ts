import Singleton from "./Singleton";

const instance1 = Singleton.getInstance();
console.log(instance1);
const instance2 = Singleton.getInstance();
console.log(instance2);