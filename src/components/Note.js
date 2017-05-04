//noi dung cua mot note, va note dc chua trong list, list gom nhieu note
import React, {Component} from 'react'
export default class Note extends Component {
    render() {
        return(
            <div>
                <p>{this.props.NoiDung}</p>
            </div>
        )
    }
}