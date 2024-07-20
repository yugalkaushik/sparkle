import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (userData) {
                setIsAuthenticated(true);
                setUser(userData);
            } else {
                // Optionally handle expired or invalid token
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setIsAuthenticated(false);
                setUser(null);
            }
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5100/login', { email, password });
            const { token, userId, email: userEmail } = response.data.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify({ userId, email: userEmail }));
            setIsAuthenticated(true);
            setUser({ userId, email: userEmail });
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
