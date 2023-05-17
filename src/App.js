//Import React and Hook
import React, { useEffect, useState } from 'react';

//Import component
import Home from './Container/Home/Home';

//Import style
import './App.css';

function App() {

    //Hook for loading
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 500);
    }, [])
    
    return (
        <div className="App">
            { loading &&
                <Home />
            }
        </div>
  );
}

export default App;
