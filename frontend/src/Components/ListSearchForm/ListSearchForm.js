import { useState, useEffect } from 'react';
import "./ListSearchForm.css";
import axios from 'axios';
import Table from './Table';

function ListSearchForm() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

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

    //Searches the keys in data model and checks to see if value matches user search
    const keys = ["car_vin", "car_make", "car_model", "crash_date"];
    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    }

    return (

        <div>
            <input
                type="text"
                placeholder="Search..."
                className="search"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <Table data={search(data)} />
        </div>

    )

}

export default ListSearchForm;