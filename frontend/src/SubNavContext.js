import React, { createContext, useState } from 'react';

export const SubNavContext = createContext();

export const SubNavProvider = ({ children }) => {
    const [subnav, setSubnav] = useState({});

    //Finds the corresponding subnav's state in the state object, toggling its value (true or false)
    const toggleSubmenu = (id) => {
        setSubnav((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <SubNavContext.Provider value={{ subnav, toggleSubmenu }}>
            {children}
        </SubNavContext.Provider>
    );
};



