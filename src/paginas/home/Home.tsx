import React, {useState, useEffect} from 'react';
import './Home.css';

function Home(){

    const [loggedIn, setLogggedIn] = useState(false);

   
    return(
        <div>
        {loggedIn ? (
            <h1>Bem-vindo de volta!</h1>
        ) : (
            <button onClick={() => setLogggedIn(true)}>Entrar</button>
        )}
        </div>
    )
}

export default Home;