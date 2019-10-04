import React from 'react';
import Header from "./header";
import Footer from "./footer";
import FormLogin from "./formLogin";

function myAlert() {
    alert('Alert')
}

function SignIn() {
    return (
        <div className="sign-in-react">
            <Header text={'Header'}/>
            <FormLogin myalert={myAlert}/>
            <p>
                <Footer text={'Footer'}/>
            </p>
        </div>
    )
}

export default SignIn;
