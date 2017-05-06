const express = require('express');
const app = express();
const parser = require('body-parser');
const jsonParser = require('body-parser').json()
const {queryDB, getAllNote, ThemData, removeNote, updateNote} = require('./controllers/db')
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
app.post('/insert', jsonParser, (req, res) => {
    const { note } = req.body;
    ThemData(note)
    .then(result => res.send(result.rows[0]))
    .catch(err => res.send({err: err.toString()} ));
})
//cung kieu du lieu, goi ve json thi tra ve json, text thi tra ve text
app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    removeNote(id)
    .then(() => res.send('THANH_CONG'))
    .catch(() => res.send('THAT_BAT'));
});

app.post('/update', jsonParser, (req, res) => {
    const { id, note } = req.body;
    updateNote(id, note)
    .then(() => res.send('THANH_CONG'))
    .catch(() => res.send('THAT_BAI'));
});