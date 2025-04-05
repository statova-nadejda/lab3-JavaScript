import {Item} from './classes/Item.js';
import {Weapon} from './classes/Weapon.js';

import {ItemFunction} from './functionConstructors/ItemFunction.js';
import {WeaponFunction} from './functionConstructors/WeaponFunction.js';


//ТЕСТИРОВАНИЕ КЛАССОВ
const sword2 = new Item("Steel Sword", 25, "rare");
console.log(sword2.getInfo());
sword2.setWeight(4.0);

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
console.log("ТЕСТИРОВАНИЕ ФУНКЦИЙ-КОНСТРУКТОРОВ");
const sword1 = new ItemFunction("Steel Sword", 3.5, "rare");
console.log(sword1.getInfo()); 
const bow1 = new WeaponFunction("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow1.getInfo()); 
bow1.use();
console.log(bow1.durability);
bow1.repair();
console.log(bow1.durability); 