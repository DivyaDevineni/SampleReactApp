import React from 'react';
import { Link } from 'react-router-dom';
class About extends React.Component{
    render(){
        return(
            <div>
                <p>This is About</p>
                <button>
                    <Link to={'/contact'}>Go To Contact</Link></button>
                </div>
        )
    }
}

export default About;