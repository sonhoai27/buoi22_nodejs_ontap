import React, { Component } from 'react';
import Note from './Note'
import getAll from '../api/getAllData'
import NoteForm from './NoteForm'


const DSNote = ['Lam bai tap', 'Nop bao cao', 'di choi vs gau']
export default class List extends Component{
    constructor(props) {
        super(props)
        this.state = {
            mang: []
        }
    }
    addItem(item){
        this.setState({mang: this.state.mang.concat(item)}) //cập nhật mảng ngay lập tức
    }
    componentDidMount(){
        getAll()
        .then(array => this.setState({mang: array}))
    }

    render(){
        return (
            <div>
               <NoteForm onAdd={this.addItem.bind(this)} />
               {this.state.mang.map(e => <Note NoiDung = {e.NoiDung} key ={i.Id}/>)}
            </div>
        )
    }
}
//giu lai nhung id khac vs id truyen vao
//dung find de tim id, muc dich la do no co dang object nen khi mang[id].content thi no se khong hieu, nen phai tim
//trong cai object do cai nao có id giong vs id object thi moi update