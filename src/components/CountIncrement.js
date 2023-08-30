import React from "react";

class CountIncrement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : Math.max(0,this.props.intialValue) 
        }
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1(){
        // this.setState(prevState =>{ return {count:prevState.count+1}} )  
        this.setState({count:this.state.count + 1})
    }
    handleClick2(){
        // this.setState(prevState => {return {count:prevState.count - 1}})
        this.setState({count: Math.max(0,this.state.count - 1)})
    }

    render(){
        return(
            <div className="Count-color">
                <h3>Count :{this.state.count} </h3>
            <button type="button" onClick={this.handleClick1} className="Increment">Increment Count</button><br></br><br></br>
            <button type="button" onClick={this.handleClick2} className="Decrement">Decrement Count</button>
            </div>
        )
    }
}
export default CountIncrement;