import React from 'react';
import { Link,history } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.signin=this.signin.bind(this.signin);
         const history = createHistory()
    }
   
    signin(){
        this.props.history.push('/home');
    }
    render(){
        return(
            <div>
                <p>This is Contact</p>
                <input type="text" value="" placeholder="username"/>
                <input type="password" placeholder="password"/>
                {/* <button><Link to={'/home'}>Go To Home</Link></button> */}
                 <button onClick={this.signin}>  SignIn</button>
                </div>
        )
    }
}

export default Contact;