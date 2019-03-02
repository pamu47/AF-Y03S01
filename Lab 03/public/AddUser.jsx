import React, {Component} from 'react';

export default class AddUser extends Component{
    static get propType(){
        return{
            addUser: PropTypes.func
        }
    }

    constructor(props){
        super(props);
    }

    onNameChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.name = event.target.value();

    }

    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        if(this.name){
            this.props.addUser({name:this.name});
            this.name = '';
        }
    }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <label>Name :</label>
                <input type="text"onChange={event => this.onNameChange(event)}/>
                <button type="submit">Add</button>

            </form>
        </div>
    }

}