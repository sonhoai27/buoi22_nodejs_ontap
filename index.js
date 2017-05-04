const express = require('express');
const app = express();
const parser = require('body-parser');
const {queryDB, getAllNote} = require('./controllers/db')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(3000, () => {
    console.log('Server da chay');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/getData', (req, res) =>{
    getAllNote()
    .then(kq => res.send(kq))
})