const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const PORT = process.env.PORT || 3004;
const { v4: uuidv4 } = require('uuid');

const app = express();
const dbPath = path.join(__dirname, 'db', 'db.json');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Reading .JSON to Note Format
app.get('/api/notes', (req, res) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            throw err;
        }
        let dbNotes = JSON.parse(data);
        res.json(dbNotes);
    });
});

// Creating a new note
app.post('/api/notes', (req, res) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            throw err;
        }
        let db = JSON.parse(data);
        const newNote = req.body;
        newNote.id = uuidv4();
        db.push(newNote);
        fs.writeFileSync(dbPath, JSON.stringify(db));
        res.json(db);
    });
});

// Deleting a note
app.delete('/api/notes/:id', (req, res) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            throw err;
        }
        let db = JSON.parse(data);
        const alteredDB = db.filter((note) => note.id !== req.params.id);
        fs.writeFileSync(dbPath, JSON.stringify(alteredDB));
        res.json(alteredDB);
    });
});

// HTML Routes
// Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Wildcard Route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
