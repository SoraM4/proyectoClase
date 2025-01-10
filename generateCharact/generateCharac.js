const character = {};
let availablePoints = 0;
let occupations = [];

// Función para actualizar los detalles de la ocupación
export function updateOccupationDetails() {
    // Verificar si el character tiene las propiedades necesarias
    if (!character.STR || !character.DEX || !character.POW || !character.CON || !character.APP || !character.EDU || !character.SIZ || !character.INT || !character.Luck) {
        return;  // No hacer nada si faltan propiedades
    }

    var select = document.getElementById('occupation');
    var selectedOccupationId = select.value;

    if (selectedOccupationId === "") {
        return;  // No hacer nada si no hay ocupación seleccionada
    }

    // Eliminar ocupación previa
    if (character.Occupation) {
        delete character.Occupation;
    }
    
    var selectedOccupation = occupations[selectedOccupationId];
    
    // Asignar nueva ocupación al objeto character
    character.Occupation = selectedOccupation.name;
    
    document.getElementById('occupation_skills').textContent = selectedOccupation.skills;
    document.getElementById('credit_rating').textContent = `Credit Rating: ${selectedOccupation.credit_rating_min} - ${selectedOccupation.credit_rating_max}`;
    
    console.log(selectedOccupation.occupation_skill_points_formula)
    var skillPoints = calculateOccupationSkillPoints(selectedOccupation.occupation_skill_points_formula);
    console.log(skillPoints)
    document.getElementById('occupation_skill_points').textContent = `Puntos de Ocupación: ${skillPoints}`;
    document.getElementById('personal_interests').textContent = `Intereses Personales: ${character.INT * 2}`;
    document.getElementById("outputJson").textContent = JSON.stringify(character, null, 2); // Muestra el objeto como JSON en el div
    availablePoints = skillPoints + character.INT * 2;
    document.getElementById('points-container').textContent = `Puntos disponibles: ${availablePoints}`;

    loadSkills();
}

export function generateCharac(characteristicName, resultElementId) {
    const resultElement = document.getElementById(resultElementId);
    const textContent = resultElement.textContent; // Obtiene el contenido del texto

    // Usamos una expresión regular para extraer el valor de "Roll: X" del texto
    const match = textContent.match(/Roll: (\d+)/);
    if (match) {
        const roll = parseInt(match[1]); // El valor de roll que obtuvimos de la expresión regular
        // Guarda el valor en el objeto character
        character[characteristicName] = roll * 5; // Usamos roll directamente para calcular el valor
        console.log(character); // Imprime el objeto para verificar
        document.getElementById("outputJson").textContent = JSON.stringify(character, null, 2); // Muestra el objeto como JSON en el div
        // Actualiza el texto para mostrar "Saved!" debajo
        resultElement.innerHTML = `Result: ${roll * 5} (Roll: ${roll}) <br> <span style="color: green;">¡Guardado!</span>`;
    } else {
        alert(`You need to roll for ${characteristicName} first!`);
    }

    // Mostrar el objeto character actualizado en el div
    document.getElementById("outputJson").textContent = JSON.stringify(character, null, 2)

    setDbBuild(character);
    setHitPoints(character);
    updateOccupationDetails(); 
}

// Función para habilitar el botón de guardar edad si todas las características están definidas
function checkCharacterStats() {
    const requiredStats = ["STR", "SIZ", "CON", "EDU", "DEX", "Luck", "APP"];
    return requiredStats.every(stat => character[stat] !== undefined);
}

// Función para establecer la edad y modificar las características
export function setAge() {
    const ageInput = document.getElementById("ageInput");
    const age = parseInt(ageInput.value);

    if (age < 15 || age > 90) {
        alert("Age must be between 15 and 90. If you wish to create an investigator outside this range, it is up to the Keeper to adjudicate.");
        return;
    }

    // Añadir el valor de Age al objeto character
    character.Age = age;

    // Mostrar el objeto character actualizado en el div
    document.getElementById("outputJson").textContent = JSON.stringify(character, null, 2)
    
    // Aplicar modificadores de edad
    applyAgeModifiers(age);

    // Mostrar el objeto character actualizado en el div
    document.getElementById("outputJson").textContent = JSON.stringify(character, null, 2);

    // Actualizar hitPoints y dbBuild
    setHitPoints(character);
    setDbBuild(character);
    setMovementRate(character, age);

    // Habilitar o deshabilitar el botón de guardar edad dependiendo de las características
    const saveAgeButton = ageInput.nextElementSibling;
    if (saveAgeButton) {
        saveAgeButton.disabled = !checkCharacterStats();
    }

    // Deshabilitar el botón de guardar edad
    const stopSaveAge = ageInput.nextElementSibling;
    if (stopSaveAge) {
        stopSaveAge.disabled = true;
    }

    // Actualizar elementos visuales relacionados
    updateCharacteristicDisplay();
}

// Función para actualizar las características visualmente
function updateCharacteristicDisplay() {
    for (const characteristicName in character) {
        const resultElement = document.querySelector(`[id$='Result'][id^='${characteristicName.toLowerCase()}']`);
        if (resultElement) {
            const originalText = resultElement.textContent.split("<br>")[0]; // Mantiene el texto original "Result: ..."
            resultElement.innerHTML = `${originalText}<br><span> Current value: ${character[characteristicName]}</span>`;
        }
    }
}

// Función para aplicar los modificadores basados en la edad
function applyAgeModifiers(age) {
    if (age >= 15 && age <= 19) {
        character.STR -= 5;
        character.SIZ -= 5;
        character.EDU -= 5;
        rollAndSetLuck(); // Se usa el valor más alto al hacer dos tiradas de Luck
    } else if (age >= 20 && age <= 39) {
        makeEduImprovementCheck(); // Mejora EDU
    } else if (age >= 40 && age <= 49) {
        makeEduImprovementCheck(); // 2 mejoras para EDU
        deductPointsFromAttributes(["STR", "CON", "DEX"], 5);
        character.APP -= 5;
    } else if (age >= 50 && age <= 59) {
        makeEduImprovementCheck(); // 3 mejoras para EDU
        deductPointsFromAttributes(["STR", "CON", "DEX"], 10);
        character.APP -= 10;
    } else if (age >= 60 && age <= 69) {
        makeEduImprovementCheck(); // 4 mejoras para EDU
        deductPointsFromAttributes(["STR", "CON", "DEX"], 20);
        character.APP -= 15;
    } else if (age >= 70 && age <= 79) {
        makeEduImprovementCheck(); // 4 mejoras para EDU
        deductPointsFromAttributes(["STR", "CON", "DEX"], 40);
        character.APP -= 20;
    } else if (age >= 80 && age <= 89) {
        makeEduImprovementCheck(); // 4 mejoras para EDU
        deductPointsFromAttributes(["STR", "CON", "DEX"], 80);
        character.APP -= 25;
    }
}

// Función para hacer una mejora en EDU
function makeEduImprovementCheck() {
    const eduCurrent = character.EDU || 50; // Asumir que EDU empieza en 50 si no está definida
    const roll = rollPercentile();
    if (roll > eduCurrent) {
        const improvement = rollDice(10);
        character.EDU = Math.min(eduCurrent + improvement, 99); // No puede superar 99
    }
}

// Función para deducir puntos de atributos (STR, CON, DEX)
function deductPointsFromAttributes(attributes, points) {
    attributes.forEach(attr => {
        if (character[attr]) {
            character[attr] -= points;
        }
    });
}

// Función para hacer dos tiradas de Luck y usar la más alta
function rollAndSetLuck() {
    let luckNew = roll3D6() * 5;
    let luckBaseText = document.getElementById("luckResult").textContent;
    let luckBase = parseInt(luckBaseText.match(/\d+/)) || 0; 
    let luckMax = Math.max(luckNew, luckBase);

    character.Luck = luckMax;
    document.getElementById("luckResult").textContent = `Result: ${luckMax}`;
}

function setDbBuild(character) {
    let damageBonus;
    let build;
    // Obtener los valores de STR y SIZ directamente desde el objeto character
    const baseStrength = character["STR"] || 0;  // Si no existe, asigna 0 por defecto
    const baseSize = character["SIZ"] || 0;  // Si no existe, asigna 0 por defecto
    const totalBases = baseStrength + baseSize;

    // Usamos switch para asignar Damage Bonus y Build basado en totalBases
    switch (true) {
        case (totalBases >= 2 && totalBases <= 64):
            damageBonus = "-2";
            build = "-2";
            break;
        case (totalBases >= 65 && totalBases <= 84):
            damageBonus = "-1";
            build = "-1";
            break;
        case (totalBases >= 85 && totalBases <= 124):
            damageBonus = "None";
            build = "0";
            break;
        case (totalBases >= 125 && totalBases <= 164):
            damageBonus = "+1D4";
            build = "1";
            break;
        case (totalBases >= 165 && totalBases <= 204):
            damageBonus = "+1D6";
            build = "2";
            break;
        case (totalBases >= 205 && totalBases <= 284):
            damageBonus = "+2D6";
            build = "3";
            break;
        case (totalBases >= 285 && totalBases <= 364):
            damageBonus = "+3D6";
            build = "4";
            break;
        case (totalBases >= 365 && totalBases <= 444):
            damageBonus = "+4D6";
            build = "5";
            break;
        case (totalBases >= 445 && totalBases <= 524):
            damageBonus = "+5D6*";
            build = "6*";
            break;
        default:
            // Esto cubre los casos fuera del rango esperado
            damageBonus = "Invalid range";
            build = "Invalid";
            break;
    }
    // Actualiza el resultado en el DOM
    document.getElementById("damageBuildResult").innerHTML = `Damage Bonus: ${damageBonus} <br> Build: + ${build}`;
}

function setHitPoints (character) {
    const baseSize = character["SIZ"] || 0;  // Si no existe, asigna 0 por defecto
    const baseConstitution = character["CON"] || 0;  // Si no existe, asigna 0 por defecto
    const totalBases = baseConstitution + baseSize

    // Divide totalBases entre 10 y redondea hacia abajo
    const hitPoints = Math.floor(totalBases / 10);

    // Actualiza el resultado en el DOM
    document.getElementById("hitPointsResult").textContent = `Hit Points: ${hitPoints}`;

}

function setMovementRate(character, age) {
    let mov;

    const str = character["STR"] || 0;
    const dex = character["DEX"] || 0;
    const siz = character["SIZ"] || 0;

    if (str < siz && dex < siz) {
        mov = 7;
    } else if (str >= siz || dex >= siz) {
        mov = 8;
    } else if (str > siz && dex > siz) {
        mov = 9;
    }

    if (age >= 40 && age < 50) {
        mov -= 1;
    } else if (age >= 50 && age < 60) {
        mov -= 2;
    } else if (age >= 60 && age < 70) {
        mov -= 3;
    } else if (age >= 70 && age < 80) {
        mov -= 4;
    } else if (age >= 80) {
        mov -= 5;
    }

    mov = Math.max(mov, 0); // Asegurar que MOV no sea negativo

    character["MOV"] = mov;

    const movementResult = document.getElementById("movementResult");
    if (movementResult) {
        movementResult.textContent = `Movement Rate: ${mov}`;
    }
}

// Función para hacer la solicitud AJAX
function loadOccupations() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "getOccupations.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            occupations = JSON.parse(xhr.responseText);
            populateOccupationSelect(occupations);
        }
    };
    xhr.send();
}

// Función para poblar la lista desplegable con ocupaciones
function populateOccupationSelect(occupations) {
    var select = document.getElementById('occupation');
    select.innerHTML = "<option value='' selected>Seleccione una ocupación</option>";
    occupations.forEach(function(occupation, index) {
        var option = document.createElement("option");
        option.value = index;
        option.textContent = occupation.name;
        select.appendChild(option);
    });
}
    
// Función para calcular los puntos de habilidad de la ocupación
function calculateOccupationSkillPoints(formula) {
    // Reemplazamos las variables de la fórmula con los valores del personaje
    formula = formula.replace('STR', character["STR"]);
    formula = formula.replace('DEX', character["DEX"]);
    formula = formula.replace('POW', character["POW"]);
    formula = formula.replace('CON', character["CON"]);
    formula = formula.replace('APP', character["APP"]);
    formula = formula.replace('EDU', character["EDU"]);
    formula = formula.replace('SIZ', character["SIZ"]);
    formula = formula.replace('INT', character["INT"]);
    formula = formula.replace('Luck', character["Luck"]);

    // Manejo de fórmulas con "OR"
    if (formula.includes('OR')) {
        // Encontramos la parte dentro del paréntesis
        const match = formula.match(/\(([^)]+)\)/);
        if (match) {
            const insideParentheses = match[1];
            const partsInside = insideParentheses.split('OR').map(part => part.trim());

            // Evaluamos ambas partes del "OR" y tomamos el máximo
            const maxValue = Math.max(eval(partsInside[0]), eval(partsInside[1]));

            // Reemplazamos el contenido del paréntesis por el valor máximo
            formula = formula.replace(`(${insideParentheses})`, maxValue);
        }
    }
    // Evaluamos la fórmula completa
    return eval(formula);
}

// Recuperar habilidades desde el backend y mostrarlas en la lista
function loadSkills() {
    fetch('getSkills.php')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al recuperar las habilidades desde el servidor.");
            }
            return response.json();
        })
        .then(data => {
            const skillsList = document.getElementById('skills-list');
            if (!skillsList) {
                console.error("No se encontró el elemento con id 'skills-list'.");
                return;
            }
            // Limpiar la lista antes de llenarla
            skillsList.innerHTML = "";

            data.forEach(skill => {
                let basePercentage;

                if (skill.id == 23) {
                    const selectedOccupationId = document.getElementById('occupation').value; // Obtener la ocupación seleccionada
                    const selectedOccupation = occupations[selectedOccupationId]; // Buscar la ocupación en el array
                    if (selectedOccupation) {
                        basePercentage = parseInt(selectedOccupation.credit_rating_min, 10);
                    } else {
                        console.error("La ocupación seleccionada no es válida.");
                        basePercentage = 0;
                    }
                    console.log(basePercentage);
                } else if (skill.id == 34) {
                    basePercentage = Math.ceil(character.DEX / 2);
                } else if (skill.id == 45) {
                    basePercentage = character.EDU;
                } else {
                    basePercentage = skill.base_percentage;
                }

                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${skill.name}</strong>
                    (<span class="percentage">${basePercentage}</span>%)
                    <input 
                        type="number" 
                        value="${basePercentage}" 
                        min="${basePercentage}" 
                        oninput="updateSkillPercentage(this, ${basePercentage})" 
                    />
                `;
                li.dataset.skillId = skill.id; // Guardar el ID de la habilidad
                skillsList.appendChild(li);
            });
        })
        .catch(error => console.error("Error al cargar habilidades:", error));
}

function updateSkillPercentage(input, basePercentage) {
    const li = input.parentElement; // Obtener el elemento <li> contenedor
    const percentageSpan = li.querySelector('.percentage');
    const skillId = parseInt(li.dataset.skillId, 10); // Obtener el ID de la habilidad
    const newPercentage = parseInt(input.value, 10); // Obtener el valor ingresado
    const currentPercentage = parseInt(percentageSpan.textContent, 10);

    if (isNaN(newPercentage) || newPercentage < basePercentage) {
        alert(`Introduce un número válido mayor o igual al porcentaje base (${basePercentage}%)`);
        input.value = currentPercentage; // Restablecer al valor actual
        return;
    }

    // Obtener el límite máximo
    let maxLimit = 99;
    if (skillId == 23) {
        const selectedOccupationId = document.getElementById('occupation').value; // Obtener la ocupación seleccionada
        const selectedOccupation = occupations[selectedOccupationId]; // Buscar la ocupación en el array
        if (selectedOccupation) {
            maxLimit = parseInt(selectedOccupation.credit_rating_max, 10);
        }
    }

    // Verificar si el nuevo porcentaje supera el límite
    if (newPercentage > maxLimit) {
        alert(`El porcentaje no puede superar el límite máximo (${maxLimit}%)`);
        input.value = currentPercentage; // Restablecer al valor actual
        return;
    }

    const pointsToSpend = newPercentage - currentPercentage; // Calcular los puntos a gastar

    // Si está restando puntos, devolverlos a la pool
    if (pointsToSpend < 0) {
        if (Math.abs(pointsToSpend) > availablePoints) {
            alert('No tienes suficientes puntos disponibles para restar.');
            input.value = currentPercentage; // Restablecer al valor actual
            return;
        }
        availablePoints += Math.abs(pointsToSpend); // Devolver los puntos a la pool
    } else { // Si está sumando puntos, restar de la pool
        if (pointsToSpend > availablePoints) {
            alert('No tienes suficientes puntos disponibles.');
            input.value = currentPercentage; // Restablecer al valor actual
            return;
        }
        availablePoints -= pointsToSpend; // Restar puntos de la pool
    }

    // Actualizar el porcentaje de la habilidad
    percentageSpan.textContent = newPercentage;

    // Actualizar el contador de puntos disponibles en la UI
    document.getElementById('points-container').textContent = `Puntos disponibles: ${availablePoints}`;
}

export function addAllSkillsToCharacter() {
    if (!character.skills) {
        character.skills = {};
    }

    const skillsList = document.getElementById('skills-list');
    if (!skillsList) {
        console.error("No se encontró la lista de habilidades.");
        return;
    }

    const skillItems = skillsList.querySelectorAll('li');
    skillItems.forEach(skillItem => {
        const skillName = skillItem.querySelector('strong').textContent.trim();
        const currentPercentage = parseInt(skillItem.querySelector('.percentage').textContent.trim(), 10);

        if (!isNaN(currentPercentage)) {
            character.skills[skillName] = currentPercentage;
        } else {
            console.warn(`No se pudo obtener un porcentaje válido para la habilidad: ${skillName}`);
        }
    });

    // Mostrar el objeto character actualizado en el DOM
    document.getElementById("outputJson").textContent = JSON.stringify(character, null, 2);

    alert("Todas las habilidades se han añadido al objeto Character.");
}

export async function generateUniqueID() {
    let uniqueID = Math.floor(Math.random() * 1000000);
    let exists = await checkIDExists(uniqueID);
    
    while (exists) {
        uniqueID = Math.floor(Math.random() * 1000000);
        exists = await checkIDExists(uniqueID);
    }
    
    character.ID = uniqueID;
    document.getElementById("outputJson").textContent = JSON.stringify(character, null, 2); // Muestra el objeto como JSON en el div
}

// Comprueba si el ID ya existe en la base de datos
export async function checkIDExists(id) {
    const response = await fetch(`checkID.php?id=${id}`);
    const data = await response.json();
    return data.exists;
}

export async function saveCharacter() {
    const response = await fetch('saveCharacter.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    });

    if (response.ok && character.ID != undefined) {
        alert(`Personaje creado con ID: ${character.ID}`);
    } else if (character.ID == undefined) {
        alert(`Personaje sin ID`)
    } else {
        alert('Fallo al crear el personaje.');
    }
}

// Exponer la función al ámbito global
window.setAge = setAge;
window.generateCharac = generateCharac;
window.updateOccupationDetails = updateOccupationDetails;
window.generateUniqueID = generateUniqueID;
window.checkIDExists = checkIDExists;
window.saveCharacter = saveCharacter;
window.addAllSkillsToCharacter = addAllSkillsToCharacter;

// Cargar habilidades y ocupaciones al inicio
window.updateSkillPercentage = updateSkillPercentage;
window.onload = function() {
loadOccupations();
};


