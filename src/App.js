import "./homepage.styles.scss"
import './App.css';
import {connect} from "react-redux";
import HomePage from './pages/homepage/homepage.components';
import ShopPage from "./pages/shop/shop.component";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/header.component" 
import SignInandSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import React from "react";
import {setCurrentUser} from "./redux/user/user.action";

class App extends React.Component{
  
  unsubscribefromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data() 
            
          });
    
        });
        
      }
      else
        setCurrentUser(userAuth);
      
      
    });


  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render(){ 
    
    return (
      
      <div>
      
        <Header />
        <Switch>  
          <Route exact path='/' component={HomePage} />  
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUpPage} />
          
        </Switch>
      </div>
    );
  }
  }

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(null, mapDispatchToProps)(App);
