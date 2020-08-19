const path = require('path');
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();
const viewDirectory = path.join(__dirname,'../templates/views')
const partialsDirectory = path.join(__dirname,'../templates/partials')
const jsonDirectory = path.join(__dirname,'../json-storage.json')
hbs.registerPartials(partialsDirectory);

const dataBuffer = fs.readFileSync(jsonDirectory);
const data = JSON.parse(dataBuffer.toString());

app.set('view engine', 'hbs')
app.set("views", viewDirectory)
app.get('', (req, res) => {
    res.render('index', {data});
})

app.listen(3000, () => {
    console.log('server is up')
});