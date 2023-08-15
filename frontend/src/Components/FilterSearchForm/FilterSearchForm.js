import './FilterSearchForm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownSearch from '../DropDownSearch/DropDownSearch';

const FilterSearchForm = () => {

    const { makes, setMakes } = useState();
    const { bodyClasses, setBodyClasses } = useState({});
    const { models, setModels } = useState({});
    const { modelYears, setModelYears } = useState({});

    useEffect(() => {
        axios.get('api-endpoint-for-makes').then(response => {
            setMakes(response.data);
        })
            .catch(error => {
                console.log('Error fetching makes:', error);
            });

        axios.get('api-endpoint-for-body-classes').then(response => {
            setBodyClasses(response.data);
        })
            .catch(error => {
                console.log('Error fetching body classes', error);
            });

        axios.get('api-endpoint-for-models').then(response => {
            setModels(response.data);
        })
            .catch(error => {
                console.log('Error fetching models', error);
            });

        axios.get('api-endpoint-for-model-years').then(response => {
            setModelYears(response.data);
        })
            .catch(error => {
                console.log('Error fetching model years', error);
            })

    }, []);

    return (

        <>
        </>



    )


}
export default FilterSearchForm;