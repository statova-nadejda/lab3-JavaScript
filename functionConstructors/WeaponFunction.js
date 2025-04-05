import {ItemFunction} from './ItemFunction.js';

/**
 * Constructor function for creating a weapon, inheriting properties from Item.
 * @constructor
 * @param {string} name - The name of the weapon.
 * @param {number} weight - The weight of the weapon.
 * @param {string} rarity - The rarity of the weapon.
 * @param {number} damage - The damage of the weapon (cannot be negative).
 * @param {number} durability - The durability of the weapon (must be between 0 and 100).
 * @throws {Error} If the damage is negative.
 * @throws {Error} If the durability is outside the valid range.
 */
export function WeaponFunction(name, weight, rarity, damage, durability) {
    ItemFunction.call(this, name, weight, rarity)
    if (damage < 0) {
        throw new Error("Ошибка! Урон не может быть отрицательным числом");
    }
    this.damage = damage;

    if (durability < 0 || durability > 100) {
        throw new Error("Ошибка! Прочность вашего оружия должна быть в диапазоне 0-100");
    }
    this.durability = durability;
}

WeaponFunction.prototype = Object.create(ItemFunction.prototype);
WeaponFunction.prototype.constructor = WeaponFunction;

/**
 * Returns information about the weapon, including damage and durability.
 * @returns {string} A string containing the weapon's name, weight, rarity, damage, and durability.
 */
WeaponFunction.prototype.getInfo = function() {
    return `${ItemFunction.prototype.getInfo.call(this)} Урон: ${this.damage}. Прочность: ${this.durability}`;
};

/**
 * Uses the weapon, reducing its durability by 10.
 * If durability reaches 0, logs a message indicating the weapon is broken.
 */
WeaponFunction.prototype.use = function() {
    if (this.durability > 0) {
        this.durability -= 10;
    } else {
        console.log("Ваше оружие сломано!");
    }
};
WeaponFunction.prototype.repair = function() {
    this.durability = 100;
};