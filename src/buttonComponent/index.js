import React from 'react';

class ButComp extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
                <button onClick={this.props.clic}>{this.props.title}</button>
                </div>
        )
    }
}

export default ButComp;