import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Note from "./components/Note"
import List from './components/List'
import InsertNote from './api/insertData'

// InsertNote('xin chao cac ban fggggh')
// .then(kq => console.log(kq))
// .catch(err => console.log(err + ''))

ReactDOM.render(
    <List/>,
    document.getElementById('root')
)