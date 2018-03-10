import React, {Component} from 'react';

class UsernameInput extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Username'};
    }
    render() {
        return (
            <div>
                <input 
                value ={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default UsernameInput;