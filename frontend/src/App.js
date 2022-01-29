import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from './components';
import Home from './container/Home';
import { fetchUser } from './utils/fetchUser';

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = fetchUser();
        if (!user) {
            navigate('/login', { replace: true, exact: true });
        }
    }, []);

    return (
        <Routes>
            <Route exact={true} path="login" element={<Login />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    )
};

export default App;
