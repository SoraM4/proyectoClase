export function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

export function roll3D6() {
    return rollDice(6) + rollDice(6) + rollDice(6);
}

export function roll2D6Plus6() {
    return rollDice(6) + rollDice(6) + 6;
}

export function rollPercentile() {
    return rollDice(10) * 10 + rollDice(10);
}

export function rollCharacteristic(resultElementId, rollFunction) {
    const roll = rollFunction();
    const characteristicValue = roll * 5;
    document.getElementById(resultElementId).textContent = `Result: ${characteristicValue} (Roll: ${roll})`;
}

// Exponer al ámbito global
window.rollDice = rollDice;
window.roll3D6 = roll3D6;
window.roll2D6Plus6 = roll2D6Plus6;
window.rollPercentile = rollPercentile;
window.rollCharacteristic = rollCharacteristic;