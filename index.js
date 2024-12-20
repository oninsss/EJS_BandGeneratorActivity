const express = require("express");
const { title } = require("process");
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const nouns = ["Phoenix", "Dragon", "Galaxy", "Thunder", "Eclipse", "Vortex", "Mirage", "Odyssey", "Rebellion", "Mystery"];
const adjectives = ["Electric", "Silent", "Wild", "Neon", "Crimson", "Golden", "Shadow", "Epic", "Mystic", "Savage"];

function getRandom(cont) {
    return cont[Math.floor(Math.random() * cont.length)]
}

app.listen(port, () => console.log(`Listening on Port ${port}`))

app.get('/', (req, res) => {
    res.render("index.ejs", {
        title: "Band Generator"
    })
});

app.post('/submit', (req, res) => {
    const randomAdj = getRandom(adjectives) 
    const randomNoun = getRandom(nouns)
    res.render("index.ejs", {
        title: "Band Generator",
        bandName: randomAdj + " " + randomNoun
    })
});