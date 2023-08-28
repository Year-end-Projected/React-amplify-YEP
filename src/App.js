import { useState } from 'react';
import './App.css';
import Router from './components/Router/Router';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <Router isAuth={isAuth} setIsAuth={setIsAuth} />
    );
}

export default App;
