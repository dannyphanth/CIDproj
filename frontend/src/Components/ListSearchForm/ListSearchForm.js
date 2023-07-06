import { useState, useEffect } from 'react';
import axios from 'axios';

function ListSearchForm() {

    const { carVin, setCarVin } = useState({});
    const { carMake, setCarMake } = useState({});
    const { carModel, setCarModel } = useState({});
    const { crashDate, setCrashDate } = useState({});

    useEffect(() => {
        setCarVin(getCarVin());
    })

    const getCarVin = () => {
        let carVin
    }

    return (
        <>

        </>
    )

}

export default ListSearchForm;