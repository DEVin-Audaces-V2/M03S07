import JediFactory from "./JediFactory";

const jedi1 = JediFactory.getJedi('green');
console.log('jedi1', jedi1); // tem que ser uma instancia de jedi consular
const jedi2 = JediFactory.getJedi('blue');
console.log('jedi2', jedi2); // tem que ser uma instancia de jedi guardiao
