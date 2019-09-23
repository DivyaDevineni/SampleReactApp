import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component{
    render(){
        return(
            <div>
                <p>This is Home</p>
                <button><Link to={'/about'}>Go To About</Link></button>
                </div>
        )
    }
}

export default Home;