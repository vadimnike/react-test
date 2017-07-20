import React from 'react';


class ProfileLog extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            logged: false
        };

        this.onLoggedClick = this.onLoggedClick.bind(this);
    };

    onLoggedClick(){
        this.setState({
            logged: !this.state.logged
        });
    };

    render(){
        return (
            <div>
                <p onClick={this.onLoggedClick}>
                    {this.state.logged ? 'logged': 'guest'}
                </p>
            </div>
        );
    }
};



export default ProfileLog;
