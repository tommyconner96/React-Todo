import React from 'react'

class TodoForm extends React.Component {
    //constructor
    constructor() {
        super()
        this.state = {
            item:''
        }
    }

    //handlers
    handleChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.item)
    }

    //class property for submitting form
    submitItem = (e) => {
        e.preventDefault()
        this.props.addItem(e, this.state.item)
        this.setState({ item:'' })
    }

    render() {

        return (
            <form onSubmit={this.submitItem}>
                <input
                type='text'
                name='item'
                value={this.state.item}
                onChange={this.handleChanges}
                 />
                <button>Add</button>
                {/* <button>Clear Completed</button> */}
            </form>
            )
    }
}
export default TodoForm