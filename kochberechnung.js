function updateMengen() {
  const portionen = document.getElementById('portionen').value;
  const zutaten = document.querySelectorAll('#zutatenListe li');

  zutaten.forEach(li => {
    const basisMenge = li.getAttribute('data-menge');
    const neueMenge = (basisMenge * portionen / 2).toFixed(1); // "2" = Basisportionen
    const text = li.textContent.split(' ');
    text[0] = neueMenge; // erste Zahl ersetzen
    li.textContent = text.join(' ');
  });
}