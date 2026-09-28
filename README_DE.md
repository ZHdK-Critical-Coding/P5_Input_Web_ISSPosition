# P5.js: ISS Position

[English](readme.md)

Holt alle zwei Sekunden die aktuelle Position der Internationalen
Raumstation und zeichnet ihre Bahn als Punkte auf die Zeichenfläche
(Längengrad auf x, Breitengrad auf y). Ein Beispiel, wie man eine Web-API
mit `fetch()` regelmässig abfragt und Live-Daten in eine Zeichnung
umsetzt.

## Installation

Voraussetzungen: eine Internetverbindung und ein aktueller Browser.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Die Seite offen lassen: Alle zwei Sekunden kommt ein neuer Punkt dazu,
   die Umlaufbahn baut sich also langsam auf.

Die Position stammt von der API [Where the ISS at?](https://wheretheiss.at)
(`/v1/satellites/25544`). Die Anfrage läuft über den Proxy AllOrigins
(`api.allorigins.win`), um CORS-Einschränkungen zu umgehen; im Browser muss
also nichts speziell eingestellt werden.

## Coding-Hilfe

- **`sketch.js` → `api_url`**: der API-Endpunkt. Ändern, um andere Daten
  zu holen (und `getISS()` anpassen).
- **`getISS()`**: ruft die URL über den AllOrigins-Proxy ab. Der Proxy
  verpackt die Antwort, deshalb wird das eigentliche JSON aus `d.contents`
  gelesen. Gibt `latitude` und `longitude` zurück.
- **`setup()`**: erstellt eine fensterfüllende Zeichenfläche und startet
  ein `setInterval`, das alle 2000 ms eine neue Position in `positions`
  speichert und die neueste Position in der Konsole ausgibt.
- **`draw()`**: rechnet Breitengrad (−90…90) und Längengrad (−180…180) auf
  0–1 um und zeichnet für jede gespeicherte Position einen Kreis. Der
  Breitengrad wird umgekehrt (`1 - …`), damit Norden oben liegt.
- **`windowResized()`**: passt die Zeichenfläche an die Fenstergrösse an.
