import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

export function useData() {
    return useContext(DataContext);
}

export function DataProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        //Fetch data from API
        axios.get('http://localhost:5000/cases')
            .then((response) => {
                console.log("response: ", response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}