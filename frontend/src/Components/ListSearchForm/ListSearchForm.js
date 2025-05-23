import { useState, useEffect } from 'react';
import "./ListSearchForm.css";
import axios from 'axios';
import Table from './Table';
import * as AiIcons from 'react-icons/ai'


function ListSearchForm() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state


    useEffect(() => {
        //Fetch data from API
        axios.get("https://cid-crashviewer-api.vercel.app/cases")
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setIsLoading(false);
            });
    }, []);

    //Searches the keys in data model and checks to see if value matches user search
    const keys = ["case_number"];
    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    }

    return (

        <div className="container max-w-screen-lg mx-auto">
            <input
                type="text"
                placeholder="Search..."
                className="search w-56 h-12 mt-8 px-3 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 shadow-md "
                onChange={(e) => setQuery(e.target.value.toLowerCase())}

            />

            {isLoading ? (
                <div className="m-8">
                    <p className="mt-8 text-2xl leading-6 text-gray-700 ">Loading data...</p>
                </div>
            ) : (
                <Table data={search(data)} />
            )}
        </div>

    )

}

export default ListSearchForm;