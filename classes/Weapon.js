import {Item} from './Item.js';

/**
 * Represents a weapon, extending the Item class with damage and durability properties.
 * @class
 * @extends Item
 */
export class Weapon extends Item {
    damage;
    durability;

    /**
     * Creates an instance of Weapon.
     * @constructor
     * @param {string} name - The name of the weapon.
     * @param {number} weight - The weight of the weapon.
     * @param {string} rarity - The rarity of the weapon.
     * @param {number} damage - The damage of the weapon (cannot be negative).
     * @param {number} durability - The durability of the weapon (must be between 0 and 100).
     * @throws {Error} If the damage is negative.
     * @throws {Error} If the durability is outside the valid range.
     */
    constructor(name, weight, rarity, damage, durability){
        super(name, weight, rarity);
        if(damage < 0){
            throw new Error("Ошибка! Урон не может быть отрицательным числом");
        }
        this.damage = damage;
        if (durability <= 0 && durability > 100){
            throw new Error("Ошибка! Прочность вашего оружия должна быть в диапозоне 0-100")
        }
        this.durability = durability;
    }

    /**
     * Returns information about the weapon, including damage and durability.
     * @returns {string} A string containing the weapon's name, weight, rarity, damage, and durability.
     */
    getInfo(){
        return `${super.getInfo()} Урон: ${this.damage}. Прочность: ${this.durability}`;
    }

    /**
     * Uses the weapon, reducing its durability by 10.
     * If durability reaches 0, logs a message indicating the weapon is broken.
     */
    use(){
        if(this.durability > 0){
            this.durability -= 10;
        }
        else {
            console.log("Ваше оружие сломано!");
        }
    }

    /**
     * Repairs the weapon, restoring its durability to 100.
     */
    repair(){
        this.durability = 100;
    }
}