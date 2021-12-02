import "./homepage.styles.scss"
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from "./pages/shop/shop.component";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/header.component" 
import SignInandSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import React from "react";


class App extends React.Component{
  constructor(){
    super();
    this.state={
        currentUser:null,
    };
  }
  unsubscribefromAuth = null;

  componentDidMount(){
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data() 
            }
          })
          console.log(this.state)
        });
        
      }
      else
        this.setState({currentUser:userAuth});
      
      
    });


  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render(){ 
    
    return (
      
      <div>
      
        <Header currentUser={this.state.currentUser} />
        <Switch>  
          <Route exact path='/' component={HomePage} />  
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUpPage} />
          
        </Switch>
      </div>
    );
  }
  }


export default App;
