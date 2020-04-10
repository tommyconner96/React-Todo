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
                placeholder='Type Tasks Here!'
                onChange={this.handleChanges}
                 />
                <div className='button-container'>
                    <button className='add-button'>
                        Add
                    </button>
                {/* <button>Clear Completed</button> */}
                    <button className="clear-complete" onClick={this.props.clearComplete}>
                        Clear Completed
                    </button>
                </div>
            </form>
            
            )
    }
}
export default TodoForm