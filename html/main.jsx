var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          name:'',
          password:''
        };
    }
    //signin, handlenamechange and password change are all funcitons that gotta be bind
    //do i need to bind all functions tho???
    signIn(){
        axios.post('/signin', {
            name: this.state.name,
            password: this.state.password
        })
        .then(function (response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });          
}
//here we set the value of the state when u input the name/password
    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    
    render(){
        return(
            <div>
            <form>
                <Link to="/" id="sign-links"><span>Sign in</span></Link>
                <Link to="/signup" id="sign-links"><span>Join us<br /></span></Link>
                <label for="inputName">Username</label>
                <input type="text" onChange={this.handleNameChange} id="inputName" placeholder="username" required autofocus /><br/>
                <label for="inputPassword">Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" placeholder="Password" required />
                <div>
                    <label for="inputType"><input type="checkbox" /> Keep my signed in</label>
                </div>
                <button onClick={this.signIn} type="button">Sign in</button>
            </form>
            
            <Link to="/signup">{'Signup'}</Link>
          </div>
        )
    }
}

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.state = {
          name:'',
          password:'',
          email:''
        };
    }
    signUp(){
        axios.post('/signup', {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        })
        .then(function (response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });          
}
    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    render(){
        return(
        <div>
        <form>
        <Link to="/" id="sign-links">{'Signin'}</Link>
      
            <Link to="/signup" id="sign-links"><span>Join us<br /></span></Link><br />
            <label for="inputName">Username</label>
            <input type="text" onChange={this.handleNameChange} id="inputName" placeholder="username" required autofocus /><br/>
            <label for="inputPassword">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" placeholder="Password" required /><br />
            <label for="inputEmail">Email</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" placeholder="email" required autofocus/>
            <button onClick={this.signUp} type="button">Sign up</button>
        </form>
        </div>
        
        
        )
    }
}

ReactDOM.render( 
    <Router history={hashHistory}>
    <Route component={Signin} path="/"></Route>
    <Route component={Signup} path="/signup"></Route>
</Router>,
    document.getElementById('app')
);