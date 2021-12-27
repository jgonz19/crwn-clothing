import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import {SignInDiv, SigInH2, ButtonsBarContainer} from "./sign-in.styles"


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: ""
        } ;
    }

    handleSubmit = async event => {
        event.preventDefault(); 
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:"", password:""});
        }catch(error){
            console.log(error);
        }
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    };

    render(){

        return(
            <SignInDiv>
                <SigInH2>I alread have an account</SigInH2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="email" 
                        required />
              
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password" 
                        required />
                    <ButtonsBarContainer>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </ButtonsBarContainer>

                </form>
            
            </SignInDiv>
        )
    }
}


export default SignIn;