import React from 'react';
import ButComp from '../buttonComponent';
class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
value:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

    increment(){
        this.setState({
            value:this.state.value+1
            
        })
    }

    decrement(){
        this.setState({
            value:this.state.value-1
            
        })
    }
render(){
    return(
<div>
{/* <button onClick={this.increment}>+1</button>
value:{this.state.value}
<button onClick={this.decrement}>-1</button> */}

<ButComp title={"+1"} clic={this.increment}/>
value:{this.state.value}
    <ButComp title={"-1"} clic={this.decrement}/>
</div>
    )
}
}

export default Counter;