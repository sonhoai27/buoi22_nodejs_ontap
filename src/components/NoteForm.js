import React, {Component} from 'react';
import InsertNote from '../api/insertData'
const styles = {
    mauVang: 'yellow'
}
export default class NoteForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const { onAdd } = this.props; //lay ra
        InsertNote(this.refs.textNote.value)
        .then(resJSON => onAdd(resJSON));
        this.refs.textNote.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" 
                        ref="textNote" placeholder="Type to create new Note..."/>
                    <button style={{background: styles.mauVang}}>Send</button>
                </form>
            </div>
        )
    }
}