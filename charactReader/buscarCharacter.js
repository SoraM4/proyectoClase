async function fetchCharacter() {
    const characterID = document.getElementById("characterID").value;

    if (!characterID) {
        alert("Por favor, introduce un ID válido.");
        return;
    }

    try {
        const response = await fetch(`buscarCharacter.php?id=${characterID}`);
        
        if (response.ok) {
            const data = await response.json();
            const character = data.character;

            // Características básicas
            const basicKeys = [
                { key: "STR", label: "FUE" }, 
                { key: "DEX", label: "DES" },
                { key: "POW", label: "POD" },
                { key: "CON", label: "CON" },
                { key: "APP", label: "APA" },
                { key: "EDU", label: "EDU" },
                { key: "SIZ", label: "TAM" },
                { key: "INT", label: "INT" },
                { key: "MOV", label: "MOV" }
            ];

            // Rellenar las cajas de características básicas
            basicKeys.forEach(item => {
                const box = document.getElementById(item.key);
                const value = character[item.key];
                box.textContent = `${item.label}: ${value !== undefined ? value : "N/A"}`;
            });

            // Características secundarias
            const pvBox = document.getElementById("PV");
            const pmBox = document.getElementById("PM");
            const corBox = document.getElementById("COR");
            const sueBox = document.getElementById("SUE");

            if (character.CON !== undefined && character.SIZ !== undefined) {
                const pv = Math.floor((character.CON + character.SIZ) / 10);
                pvBox.textContent = `PV: ${pv}`;
            } else {
                pvBox.textContent = "PV: N/A";
            }

            if (character.POW !== undefined) {
                const pm = Math.floor(character.POW / 5);
                pmBox.textContent = `PM: ${pm}`;
                corBox.textContent = `COR: ${character.POW}`;
            } else {
                pmBox.textContent = "PM: N/A";
                corBox.textContent = "COR: N/A";
            }

            if (character.Luck !== undefined) {
                sueBox.textContent = `SUE: ${character.Luck}`;
            } else {
                sueBox.textContent = "SUE: N/A";
            }

            // Procesar y mostrar las habilidades
            const skillsOutput = document.getElementById("skillsOutput");
            skillsOutput.innerHTML = ""; // Limpiar contenido previo

            if (character.skills) {
                Object.entries(character.skills).forEach(([skillName, skillValue]) => {
                    const skillBox = document.createElement("div");
                    skillBox.classList.add("box");
                    skillBox.textContent = `${skillName}: ${skillValue}% | ${Math.floor(skillValue / 2)}% | ${Math.floor(skillValue / 5)}%`;
                    skillsOutput.appendChild(skillBox);
                });
            } else {
                skillsOutput.textContent = "No se encontraron habilidades.";
            }
        } else if (response.status === 404) {
            document.getElementById("characterOutput").textContent = "No se encontró ningún character con ese ID.";
        } else {
            document.getElementById("characterOutput").textContent = "Error al obtener el character.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("characterOutput").textContent = "Error de conexión.";
    }
}



// Función para dar formato a valores complejos
function formatValue(value) {
    if (typeof value === "object" && value !== null) {
        return JSON.stringify(value, null, 2); // Formato JSON para objetos y arrays
    }
    return value; // Devolver el valor tal cual para valores simples
}

