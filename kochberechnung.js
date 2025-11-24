const personenInput = document.getElementById("personen");
const personenAnzeige = document.getElementById("personen-anzahl");
const zutaten = document.querySelectorAll("#zutaten li");

const basisPersonen = 2;


zutaten.forEach(zutat => {
    zutat.dataset.originalText = zutat.textContent;
});

personenInput.addEventListener("input", () => {
    const personen = parseInt(personenInput.value);
    personenAnzeige.textContent = personen;

    zutaten.forEach(zutat => {
        const basisMenge = parseFloat(zutat.dataset.menge);

        
        if (isNaN(basisMenge)) {
            const name = zutat.dataset.originalText.replace(/[0-9. ]+/, "");
            zutat.textContent = `${name} (nach Geschmack)`;
            return;
        }

        
        const neueMenge = (basisMenge / basisPersonen) * personen;

        const name = zutat.dataset.originalText.replace(/[0-9. ]+/, "");

        zutat.textContent = `${neueMenge} ${name}`;
    });
});