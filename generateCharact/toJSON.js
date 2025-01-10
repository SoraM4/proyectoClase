// toJSON.js
import { rollDice, roll3D6, roll2D6Plus6, rollPercentile, rollCharacteristic } from './rollDice.js';

// Objeto global para almacenar las características
const characterData = {};

// Función para guardar y actualizar el JSON
function saveToJson(characteristicName, resultElementId, inputElementId) {
    let value;

    // Primero intentamos obtener el valor desde el input manual (si está presente)
    const inputValue = document.getElementById(inputElementId) ? document.getElementById(inputElementId).value : null;

    if (inputValue) {
        value = parseInt(inputValue, 10);

        if (characteristicName === 'Age' && (value < 15 || value > 90)) {
            alert("El valor de la edad debe estar entre 15 y 90.");
            return;
        }

        characterData[characteristicName] = value; 
    } else {
        const resultText = document.getElementById(resultElementId).textContent;
        const match = resultText.match(/Result: (\d+)/);

        if (match) {
            value = parseInt(match[1], 10);
            characterData[characteristicName] = value;
        } else {
            alert('Primero debes tirar los dados o ingresar un valor manualmente.');
            return;
        }
    }

    applyAgeModifiers(characterData['Age']);
    document.getElementById('outputJson').textContent = JSON.stringify(characterData, null, 2);
}

// Función para aplicar las modificaciones según la edad
function applyAgeModifiers(age) {
    if (!age) return;

    if (age >= 15 && age <= 19) {
        // Deduct 5 points from STR and SIZ, and from EDU.
        characterData['STR'] = Math.max(0, (characterData['STR'] || 0) - 5);
        characterData['SIZ'] = Math.max(0, (characterData['SIZ'] || 0) - 5);
        characterData['EDU'] = Math.max(0, (characterData['EDU'] || 0) - 5);

        // Roll twice for Luck and take the higher value
        const luck1 = roll3D6() * 5;
        const luck2 = roll3D6() * 5;
        characterData['Luck'] = Math.max(luck1, luck2);
    }

    if (age >= 20 && age <= 39) {
        // Make an improvement check for EDU.
        improveEDU();
    }

    if (age >= 40 && age <= 49) {
        // Make 2 improvement checks for EDU and deduct 5 points from STR, CON, or DEX, and reduce APP by 5.
        improveEDU();
        improveEDU();
        deductPoints('STR', 'CON', 'DEX', 5);
        characterData['APP'] = Math.max(0, (characterData['APP'] || 0) - 5);
    }

    if (age >= 50 && age <= 59) {
        // Make 3 improvement checks for EDU and deduct 10 points from STR, CON, or DEX, and reduce APP by 10.
        improveEDU();
        improveEDU();
        improveEDU();
        deductPoints('STR', 'CON', 'DEX', 10);
        characterData['APP'] = Math.max(0, (characterData['APP'] || 0) - 10);
    }

    if (age >= 60 && age <= 69) {
        // Make 4 improvement checks for EDU and deduct 20 points from STR, CON, or DEX, and reduce APP by 15.
        improveEDU();
        improveEDU();
        improveEDU();
        improveEDU();
        deductPoints('STR', 'CON', 'DEX', 20);
        characterData['APP'] = Math.max(0, (characterData['APP'] || 0) - 15);
    }

    if (age >= 70 && age <= 79) {
        // Make 4 improvement checks for EDU and deduct 40 points from STR, CON, or DEX, and reduce APP by 20.
        improveEDU();
        improveEDU();
        improveEDU();
        improveEDU();
        deductPoints('STR', 'CON', 'DEX', 40);
        characterData['APP'] = Math.max(0, (characterData['APP'] || 0) - 20);
    }

    if (age >= 80 && age <= 89) {
        // Make 4 improvement checks for EDU and deduct 80 points from STR, CON, or DEX, and reduce APP by 25.
        improveEDU();
        improveEDU();
        improveEDU();
        improveEDU();
        deductPoints('STR', 'CON', 'DEX', 80);
        characterData['APP'] = Math.max(0, (characterData['APP'] || 0) - 25);
    }
}

// Función para realizar una mejora en EDU
function improveEDU() {
    const currentEDU = characterData['EDU'] || 0;
    const roll = rollPercentile();

    if (roll > currentEDU) {
        const improvement = rollDice(10);
        characterData['EDU'] = Math.min(99, currentEDU + improvement); // EDU no puede superar 99
    }
}

// Función para deducir puntos entre STR, CON, o DEX
function deductPoints(...stats) {
    const statToDeduct = stats[Math.floor(Math.random() * stats.length)];
    if (characterData[statToDeduct] !== undefined) {
        characterData[statToDeduct] = Math.max(0, characterData[statToDeduct] - 5);  // Deduct 5 points
    }
}
