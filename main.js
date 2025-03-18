import * as classesTesting from './classes.js';
import * as functionsConstructorsTesting from './functionConstructors.js';

//ТЕСТИРОВАНИЕ КЛАССОВ
const sword2 = new Item ("Steel Sword", 25, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);

const sword = new Item ("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);
console.log(sword.getInfo());
console.log(sword?.itemName);

const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
console.log(bow?.durability);
bow.repair();

// ТЕСТИРОВАНИЕ ФУНКЦИЙ-КОНСТРУКТОРОВ
const sword1 = new Item("Steel Sword", 3.5, "rare");
console.log(sword1.getInfo()); 
const bow1 = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow1.getInfo()); 
bow1.use();
console.log(bow1.durability);
bow1.repair();
console.log(bow1.durability);