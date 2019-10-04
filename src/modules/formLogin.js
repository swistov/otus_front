import React, { Component } from 'react';

class FormLogin extends Component{

    state = {
        name: 'Username'
    }

    changed = env => {
        this.setState({name: env.target.value});
        console.log(this.state.name);

    }

    render() {
        return (
            <div>
                <h2 onClick={this.props.myalert}>
                    LOGIN FORM
                </h2>

                <input value={this.state.name}
                       onChange={this.changed}
                       type={'text'}/>
            </div>
        )
    }
}

export default FormLogin;
