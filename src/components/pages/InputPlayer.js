import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class InputPlayer extends Component{
    render(){
        return (
            <div id="content-wrapper">
                <div className ="container-fluid">
                <h4>Input New Player</h4>
                <form className="inputPlayer" action="/submitPlayer">
                <input className="Name" type="text" placeholder="Input Player Name"/><br/>
                <input className="Ability1" type="text" placeholder="Ability1"/><br/>
                <input className="Ability2" type="text" placeholder="Ability2"/><br/>
                <input className="Ability3" type="text" placeholder="Ability3"/><br/>
                <input className="Ability4" type="text" placeholder="Ability4"/><br/>
                <input className="Ability5" type="text" placeholder="Ability5"/><br/>
                <input className="Ability6" type="text" placeholder="Ability6"/><br/>
                <input className="Ability7" type="text" placeholder="Ability7"/><br/>
                <input className="Ability8" type="text" placeholder="Ability8"/><br/>
                <input className="Ability9" type="text" placeholder="Ability9"/><br/>
                <button className="Submit">Submit Player</button><br/>
                <h3>{this.props.result}</h3>
                </form>
            </div>
            </div>
        );
    }
}

export default InputPlayer;