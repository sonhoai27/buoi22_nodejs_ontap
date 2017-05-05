import React, {Component} from 'react';
export default class NoteForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        // const { onAdd } = this.props;
        // insertNote(this.refs.txtNote.value)
        // .then(resJSON => onAdd(resJSON));
        console.log(this.refs.textNote.value)
        this.refs.textNote.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" 
                        ref="textNote" placeholder="Type to create new Note..."/>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}