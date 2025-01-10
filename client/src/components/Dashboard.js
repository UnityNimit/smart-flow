// src/components/Dashboard.js
import React, { useState } from 'react';

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <h1>Dashboard</h1>
            <button onClick={toggleDarkMode}>
                Switch to {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};

export default Dashboard;