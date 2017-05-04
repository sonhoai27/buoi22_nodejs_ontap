import React, { Component } from 'react';
import Note from './Note'
import getAll from '../api/getAllData'
const DSNote = ['Lam bai tap', 'Nop bao cao', 'di choi vs gau']
export default class List extends Component{
    constructor(props) {
        super(props)
        this.state = {
            mang: []
        }
    }

    componentDidMount(){
        getAll()
        .then(array => this.setState({mang: array}))
    }
    render(){
        return (
            <div>
               {this.state.mang.map((e, i) => <Note NoiDung = {e.NoiDung} key ={i}/>)}
            </div>
        )
    }
}