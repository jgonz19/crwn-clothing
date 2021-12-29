import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {SignInDiv, SigInH2, ButtonsBarContainer} from "./sign-in.styles";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.action";
import { connect } from "react-redux";


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
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    };

    render(){
        const {googleSignInStart}= this.props;
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
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with google</CustomButton>
                    </ButtonsBarContainer>

                </form>
            
            </SignInDiv>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})


export default connect(null, mapDispatchToProps)(SignIn);