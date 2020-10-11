const express = require('express');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 80;

// Connecting mongoose to mongod
mongoose.connect('mongodb://localhost/ankit', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
    console.log('We are connected....')
});

// Making mongoose schema
const dataSchema = new mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    address: String,
    concern: String
})

// Making Mongoose Model from Schema 
const dataModel = mongoose.model('dataModel', dataSchema);

// Express Special
app.use(express.static('views'));
app.use(express.urlencoded());

// Pug Special
app.set('view engine', 'pug');
// app.set('views',path.join(__dirname , 'views'));



// End Points 
app.get('/', (req, res) => {
    params = { title: 'Dance India Dance' }
    res.status(200).render('home.pug', params)
})

// Saving data to database
app.get('/contact', (req, res) => {
    params = { title: 'Contact Us' }
    res.status(200).render('contact.pug', params)
})
app.post('/send-data', (req, res) => {
    // let data = `Name - ${req.body.name}\n Phone number - ${req.body.number}\n Email - ${req.body.email}\n Address - ${req.body.address}\n Concern - ${req.body.concern}\n`;
    // fs.appendFileSync('database for dance academy' ,data)
    // params = {title :'Contact Us'}
    // Mongoose Schema

    // Making Object from Mongoose Model 
    const dataObject = new dataModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        address: req.body.address,
        concern: req.body.concern
    });
    
    // Saving data to datbase
    dataObject.save(function (err, datas) {
        if (err) return console.error(err);
        console.log(datas)
        res.send('This item has been saved to the database.');
    });
})

// Server
app.listen(port, () => {
    console.log(`Server is started at 127.0.0.1`)
})