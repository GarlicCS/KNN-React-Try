import React, {Component} from 'react';
import ReactInputHandler from 'react-input-handler';

class Try extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };

      }
    
      handleSubmit = (e) => {
        e.preventDefault();
    }
    
      callAPI() {
          fetch("http://localhost:9000/testAPI")
              .then(res => res.text())
              .then(res => this.setState({ apiResponse: res }));
      }
    
      componentWillMount() {
          this.callAPI();
      }

    render(){
        return (
            <p>{this.state.apiResponse}</p>
            // <div>
            //     <form method="POST" enctype="multipart/form-data">
            //         <div className="col-sm-4">
            //             <label for="input1">Ball Control </label> <br/>
            //             <input className="input1" id="input1" name="input1" size="3" type="number" min="0" max="100" onChange={this.handleChange} />
            //         </div>
            //         <div className="col-sm-4">
            //             <label for="input2">Dribbling  </label> <br/>
            //             <input className="input2" id="input2" name="input2" type="number" min="0" max="100" onChange={this.handleChange} />
            //         </div>
            //         <div>
            //             <input type="submit" id="trySumbit" className="trySubmit" />Try
            //         </div>
            //     </form>
            // </div>
        );
}
}
export default Try;