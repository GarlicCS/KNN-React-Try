import React, {Component} from 'react';
import ReactInputHandler from 'react-input-handler';

class TryAPI extends Component{
    constructor(props){
        super(props);
        this.state = { 
            input1:'',
            input2:''
        }
        this.handleChange = ReactInputHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleSubmit = (e) => {
        e.preventDefault();

        const {input1, input2} = this.state;

        fetch('http://localhost:9000/testAPI', {
            method:"POST",
            headers: {
                'Content-type': 'application/json'
              }
            .then((result) => {
                console.log(result);
            })
        })
    }

    render(){
        return (
            <form method="POST" onSubmit={this.handleSubmit}>
                     <div className="col-sm-4">
                         <label for="input1">Input1 </label> <br/>
                         <input className="input1" id="input1" name="input1" size="3" type="number" min="0" max="100" onChange={this.handleChange} />
                     </div>
                     <div className="col-sm-4">
                         <label for="input2">Input2  </label> <br/>
                         <input className="input2" id="input2" name="input2" type="number" min="0" max="100" onChange={this.handleChange} />
                     </div><br/>
                     <div>
                         <input type="submit" id="trySumbit" className="trySubmit" />
                     </div>
            </form>
        );
    }
}

export default TryAPI;