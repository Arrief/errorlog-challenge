# Error-Log

## Beschreibung
Error-Log ist eine Website zur Darstellung von Fehlermeldungen in einer Datentabelle. Die Fehlermeldungen stammen von einem externen Server, beim Besuch der Website wird der vollständige Datensatz angefragt, geladen und angezeigt. Der Nutzer kann darauf die Zahl der Datensätze pro Seite auswählen, zwischen den Seiten wechseln, sich eine ausführliche Fehlermeldung zu jeder Fehlerzeile in der Tabelle anzeigen lassen und die Ergebnisse filtern. Das Filtern erfolgt serverseitig, der Nutzer kann entweder eine Volltextsuche senden, oder aber gezielt nach einzelnen Kategorien wie z.B. der Kunden/Firmen-ID, Fehlerstatus und -quelle, oder Datum und Zeit der Fehlermeldungen filtern. Die Filter lassen sich einzeln oder kombiniert senden. Auch die Auswahl eines Limits für die Zahl der Datensätze, die der Server bereitstellen soll, ist möglich. 

## Lokale Installation
Das Projekt lässt sich mit dem lokalen development server von Vite direkt starten. Nachdem das Repository geklont wurde (ohne Dollarzeichen):
```
$ cd errorlog-challenge
$ npm install
$ npm run dev
```

## Tools
- React
- TypeScript
- MaterialUI/MUI
- Vite
