function bereken() {
    var vader = parseFloat(document.getElementById('lengte-vader').value);
    var moeder = parseFloat(document.getElementById('lengte-moeder').value);

    var antwoord = (vader + moeder) / 2;
    if (isNaN(antwoord)) {
        alert('De lengte van uw vader en moeder moeten worden ingevuld');
        return;

    } else {
        document.getElementById('answer').innerHTML = antwoord + ' cm';
    }
}
