export const rarityPossibleVal = {
    Value1: "common",
    Value2: "uncommon",
    Value3: "rare",
    Value4: "legendary"
};

/**
 * Constructor function for creating an item.
 * @constructor
 * @param {string} name - The name of the item.
 * @param {number} weight - The weight of the item (must be a positive number).
 * @param {string} rarity - The rarity of the item (must be one of the values from rarityPossibleVal).
 * @throws {Error} If the weight is not a positive number.
 * @throws {Error} If the rarity is not a valid value.
 */
export function ItemFunction(name, weight, rarity) {
    this.itemName = name;

    if (weight <= 0) {
        throw new Error("Ошибка! Вес должен быть положительным числом");
    }
    this.weight = weight;

    if (!Object.values(rarityPossibleVal).includes(rarity)) {
        throw new Error("Ошибка! Выберите допустимое значение для rarity (common, uncommon, rare, legendary)");
    }
    this.rarity = rarity;
}
/**
 * Returns information about the item.
 * @returns {string} A string containing the item's name, weight, and rarity.
 */
ItemFunction.prototype.getInfo = function() {
    return `Название предмета: ${this.itemName}. Вес предмета: ${this.weight}. Редкость предмета: ${this.rarity}.`;
};

/**
 * Sets a new weight for the item.
 * @param {number} newWeight - The new weight of the item (must be a positive number).
 * @throws {Error} If the new weight is not a positive number.
 */
ItemFunction.prototype.setWeight = function(newWeight) {
    if (newWeight <= 0) {
        throw new Error("Ошибка! Вес должен быть положительным числом");
    }
    this.weight = newWeight;
};
