import LoginForm from "./LoginForm";


function Header({loggedIn, setLoggedIn}: any){

    return(
        <div className="header">
            <div id = "titlediv">
            <h1>Kristians Webshop 🤠</h1>
            </div>
         
            <LoginForm loggedIn={loggedIn} SetLoggedIn={setLoggedIn}></LoginForm>
          
         </div>
     );
}

export default Header;