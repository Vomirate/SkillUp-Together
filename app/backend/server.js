const express = require('express');
const app = express();
const port = 3000;

// Ustawienie parsera do obsługi danych w formacie JSON
app.use(express.json());

// Endpoint GET '/'
app.get('/', (req, res) => {
  res.send('API!');
});

// Obsługa nieznalezionego endpointu
app.use((req, res) => {
  res.status(404).send('Nie znaleziono takiej strony!');
});

// Start serwera
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});