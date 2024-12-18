import { useRef, useState, useEffect } from "react";
import axios from "axios";

function LoginForm({loggedIn, SetLoggedIn}: any){



    

    const usernameVal = useRef<HTMLInputElement>(null);
    const passcodeVal = useRef<HTMLInputElement>(null);

    function attemptLogin(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        var username = usernameVal.current?.value;
        var passcode = passcodeVal.current?.value;

        if(!username){
            alert("Please enter a username");
            console.log("username missing :(");
        }
        else if(!passcode){
            alert("Please enter a password");
            console.log("password missing :(");
        }
        else{
            axios.post('https://api-kris13m-webshop-project.onrender.com/api/users/login', {username: username, passcode: passcode})
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log("token: ",token);

                const username = response.data.username;
                localStorage.setItem('username', username)
                console.log("username:", username);

                SetLoggedIn(true);
                console.log("logged in: ", loggedIn);
              })
              .catch((err) => {
                console.log(err);
                alert("incorrect username or password")
              });
        }
    }
    function createAccount(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        var username = usernameVal.current?.value;
        var passcode = passcodeVal.current?.value;

        if(!username){
            alert("Please enter a username");
            console.log("username missing :(");
            
        }
        else if(!passcode){
            alert("Please enter a password");
            console.log("username missing :(");
        }
        else{
            axios.post('https://api-kris13m-webshop-project.onrender.com/api/users/createuser', {username: username, passcode: passcode})
            .then((response) => {
                console.log("created user");
                attemptLogin(event);
               
              })
              .catch((err) => {
                console.log(err);
                alert("username taken")
              });
        }

    }
    function deleteAccount(){
        const username = localStorage.getItem('username');
        console.log("username retrived for deletion: ", username);
        axios.delete('https://api-kris13m-webshop-project.onrender.com/api/users/deleteuser', { data: { username: username } })
        .then(response => {
            console.log(response.data);
            logout();
        })
        .catch(err => {
            console.log(err);
            alert("something went wrong trying to delete the user :(")
        });
        
    }

    function logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        SetLoggedIn(false);
    }

    return(
        <div>
            {!loggedIn ? (
            <form>
                <input ref = {usernameVal} type="text" placeholder="username:"></input>
                <input ref = {passcodeVal} type="password" placeholder="password:"></input>
                <button type = "button" onClick = {createAccount}>create account</button>
                <button type = "button" onClick = {attemptLogin}>login</button>
            </form>  
            ) : (
                <div>
                <h4>{localStorage.getItem('username')}</h4>
                <button type = "button" onClick = {logout}>logout</button>
                <button type = "button" onClick = {deleteAccount}>delete account</button>
                </div>
            )
            }
        </div>

    )
    
}

export default LoginForm;