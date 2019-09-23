import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/image001.jpg'
class Navbar extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
             <header className="App-header">
                 <img src={logo} alt="9logic" style={{marginRight:'70%'}}/>
<Link to={'/home'} style={{color:'white'}}>Home</Link>
<Link to={'/about'} style={{marginLeft:'10px',color:'white'}}>About</Link>
<Link to={'/contact'} style={{marginLeft:'10px',color:'white'}}>Contact</Link>
                 </header>
                 </div>
        )
    }
}

export default Navbar;