import  { useState } from 'react';
import Header from  './components/Header.tsx';
import ItemsHolder from './components/ItemsHolder.tsx';

function App()
{
  const [loggedIn, setLoggedIn] = useState(false);
 

  return(
    <>
  
    <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Header>
    <ItemsHolder loggedIn={loggedIn}></ItemsHolder>
   
    </>
  )
}
export default App
