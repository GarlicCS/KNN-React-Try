import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactInputHandler from 'react-input-handler';

// const btnStyle = {

// }

class InputPlayer extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.handleChange = ReactInputHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        for (let i = 0; i< 9; i++) {
            console.log(this.state[`Ability${i}`]);
        }
    }

    render(){
        return (
            <div id="content-wrapper">
                <h4 style={{textAlign:'center'}}>Input New Player</h4><br/>
                <div className ="container-fluid" style={{textAlign:'center'}}>
                    <form className="inputPlayer" onSubmit={this.handleSubmit}> 
                        <label for="Name">Player Name</label> <br/>
                        <input className="Name" id="Name" name="Name" type="text" onChange={this.handleChange} /><br/><br/>
                        <div className="row">
                            <div className="col-sm-4">
                                <label for="Ability1">Ball Control </label> <br/>
                                <input className="Ability1" id="Ability1" name="Ability1" size="3" type="number" min="0" max="100" onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-4">
                                <label for="Ability2">Dribbling  </label> <br/>
                                <input className="Ability2" id="Ability2" name="Ability2" type="number" min="0" max="100" onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-4">
                                <label for="Ability3">Short Pass  </label> <br/>
                                <input className="Ability3" id="Ability3" name="Ability3" type="number" min="0" max="100" onChange={this.handleChange} /><br/>
                             </div>
                        </div><br/>

                        <div className="row">
                            <div className="col-sm-4">
                                <label  for="Ability4">Long Pass  </label> <br/>
                                <input className="Ability4 " id="Ability4" name="Ability4" type="number" min="0" max="100" onChange={this.handleChange} /><br/>
                            </div>
                            <div className="col-sm-4">
                                <label  for="Ability5">Sprint Speed  </label> <br/>
                                <input className="Ability5 " id="Ability5" name="Ability5" type="number" min="0" max="100" onChange={this.handleChange} /><br/>
                            </div>
                            <div className="col-sm-4">
                                <label  for="Ability6">Agility  </label> <br/>
                                <input className="Ability6" id="Ability6" name="Ability6" type="number" min="0" max="100" onChange={this.handleChange} /><br/>
                            </div>
                        </div><br/>

                        <div className="row">
                            <div className="col-sm-4">
                                <label classname="col-sm-6" for="Ability7">Jumping  </label> <br/>
                                <input className="Ability7" id="Ability7" name="Ability7" type="number" min="0" max="100" onChange={this.handleChange} /><br/>
                            </div>
                            <div className="col-sm-4">
                                <label classname="col-sm-6" for="Ability8">Acceleration  </label> <br/>
                                <input className="Ability8" id="Ability8" name="Ability8" type="number" min="0" max="100" onChange={this.handleChange} /><br/>
                            </div>
                            <div className="col-sm-4">
                                <label classname="col-sm-6" for="Ability9">Shot Power  </label> <br/>
                                <input className="Ability9" id="Ability9" name="Ability9" type="number" min="0" max="100" onChange={this.handleChange} /><br/>
                            </div>
                        </div><br/>
                        <div className="row" id="btnSubmitPlayer" style={{justifyContent:'center'}} >
                            <input className = "button col-sm-1" name="submit" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default InputPlayer;