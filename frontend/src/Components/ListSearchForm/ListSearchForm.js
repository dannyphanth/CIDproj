import { useState, useEffect } from 'react';
import axios from 'axios';

function ListSearchForm() {

    // const { carVin, setCarVin } = useState({});
    // const { carMake, setCarMake } = useState({});
    // const { carModel, setCarModel } = useState({});
    // const { crashDate, setCrashDate } = useState({});

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

        <div>
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Crash Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.car_vin}</td>
                            <td>{item.car_make}</td>
                            <td>{item.car_model}</td>
                            <td>{item.car_year}</td>
                            <td>{item.crash_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )

}

export default ListSearchForm;