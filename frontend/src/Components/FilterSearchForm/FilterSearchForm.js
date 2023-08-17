import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'
import DropDownSearch from '../DropDownSearch/DropDownSearch';
import NumberRangeSelect from './NumberRangeSelect';

const FilterSearchForm = () => {

    const { makes, setMakes } = useState({});
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

    // Array States for all query selections
    const [vehMakeOptions, setVehMakeOptions] = useState([]);
    const [vehModelOptions, setVehModelOptions] = useState([]);
    const [vehYearOptions, setVehYearOptions] = useState([]);
    const [vehBodyClassOptions, setVehBodyClassOptions] = useState([]);
    // const [primaryDamage, setPrimaryDamage] = useState(["F Front", "B Back (rear)", "L Left Side", "R Right Side", "T Top", "U Undercarriage", "9 Unknown"]);
    const primaryDamageOptions = ["F Front", "B Back (rear)", "L Left Side", "R Right Side", "T Top", "U Undercarriage", "9 Unknown"];
    const secondaryDamageOptions = ["D Distributed-side or end", "L Left - front or rear", "C Center - front or rear", "R Right - front or rear", "F Side Front - left or right", "P Side center section - L or R", "B Side rear - left or right", "Y Side (F + P) or end (L + C)", "Z Side(P + B) or end (C + R)", "9 Unknown"];

    //Handle user selecting vehicle make options from dropdown 
    const [selectedVehMakeOptions, setSelectedVehMakeOptions] = useState([]);
    const handleSelectedVehMakeOptionsChange = (newSelectedVehMakeOptions) => {
        setSelectedVehMakeOptions(newSelectedVehMakeOptions);
    };

    //Handle user selecting vehicle model options from dropdown 
    const [selectedVehModelOptions, setSelectedVehModelOptions] = useState([]);
    const handleSelectedVehModelOptionsChange = (newSelectedVehModelOptions) => {
        setSelectedVehModelOptions(newSelectedVehModelOptions);
    };

    //Handle user selecting vehicle year options from dropdown 
    const [selectedVehYearOptions, setSelectedVehYearOptions] = useState([]);
    const handleSelectedVehYearOptionsChange = (newSelectedVehYearOptions) => {
        setSelectedVehYearOptions(newSelectedVehYearOptions);
    }

    //Handle user selecting vehicle body class options from dropdown 
    const [selectedvehBodyClassOptions, setSelectedVehBodyClassOptions] = useState([]);
    const handleSelectedVehBodyClassOptions = (newSelectedVehBodyClassOptions) => {
        setSelectedVehBodyClassOptions(newSelectedVehBodyClassOptions);
    }

    //Handle user selecting vehicle Primary Damage options from dropdown
    const [selectedPrimaryDamageOptions, setSelectedPrimaryDamageOptions] = useState([]);
    const handleSelectedPrimaryDamageOptions = (newSelectedPrimaryDamageOptions) => {
        setSelectedPrimaryDamageOptions(newSelectedPrimaryDamageOptions);
    }

    //Handle user selecting vehicle Seconday Damage options from dropdown
    const [selectedSecondaryDamageOptions, setSelectedSecondaryDamageOptions] = useState([]);
    const handleSelectedSecondaryDamageOptions = (newSelectedSecondaryDamageOptions) => {
        setSelectedSecondaryDamageOptions(newSelectedSecondaryDamageOptions);
    }




    //Fetch all vehicle makes from text file
    useEffect(() => {
        fetch('/AllVehicleMakes.txt')
            .then(response => response.text())
            .then(data => {
                const optionsArray = data.split('\n');
                setVehMakeOptions(optionsArray);
            })
            .catch(error => {
                console.error('Error fetching and parsing vehicle options:', error);
            });
    }, []);

    //Fetches all vehicle models from NHTSA API based on each selected vehicle makes
    const fetchVehicleModelInfo = async () => {
        const modelOptions = [];

        for (const make of selectedVehMakeOptions) {
            try {
                const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
                const data = await response.json();
                const modelNames = data.Results.map(result => result.Model_Name);
                modelOptions.push(...modelNames);
            } catch (error) {
                console.error(`Error fetching model info for ${make}:`, error);
            }
        }

        setVehModelOptions(modelOptions);
    };
    // Call fetchVehicleModelInfo whenever selectedVehMakeOptions change
    useEffect(() => {
        fetchVehicleModelInfo();
    }, [selectedVehMakeOptions]);

    //Fetch all vehicle years from text file
    useEffect(() => {
        fetch('/AllVehicleYears.txt')
            .then(response => response.text())
            .then(data => {
                const optionsArray = data.split('\n');
                setVehYearOptions(optionsArray);
            })
            .catch(error => {
                console.error('Error fetching and parsing vehicle options:', error);
            });
    }, []);

    //Fetch all vehicle body classes from text file
    useEffect(() => {
        fetch('/AllVehicleBodyClasses.txt')
            .then(response => response.text())
            .then(data => {
                const optionsArray = data.split('\n');
                setVehBodyClassOptions(optionsArray);
            })
            .catch(error => {
                console.error('Error fetching and parsing vehicle options:', error);
            });
    }, []);

    console.log("Make Options", vehMakeOptions)

    const handleSearch = async (e) => {

        e.preventDefault();



    }

    return (

        <div className="min-h-screen p-6 bg-gray-500 bg-opacity-20 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                {console.log("Selected Options", selectedVehMakeOptions)}
                <Form onSubmit={handleSearch} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">

                    <div className=" border border-solid-800 rounded-t-lg shadow-md">
                        <div className="bg-gray-500/20 rounded-t-lg shadow-md w-full p-0 h-10 flex justify-start items-center ">
                            <p className="font-medium text-xl leading-tight text-gray-800 px-4 py-0 my-0"> Vehicle Details</p>
                        </div>
                        <div className="grid gap-7 text-lg grid-cols-1 md:grid-cols-3 py-4 px-4 w-full">


                            <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">Vehicle Make</Label>
                                <DropDownSearch
                                    options={vehMakeOptions}
                                    selectedOptions={selectedVehMakeOptions}
                                    onSelectedOptionsChange={handleSelectedVehMakeOptionsChange}
                                    placeHolder="Makes"
                                />
                            </FormGroup>
                            <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">Vehicle Model</Label>
                                <DropDownSearch
                                    options={vehModelOptions}
                                    selectedOptions={selectedVehModelOptions}
                                    onSelectedOptionsChange={handleSelectedVehModelOptionsChange}
                                    placeHolder="Models"

                                />
                            </FormGroup>
                            <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">Vehicle Year</Label>
                                <DropDownSearch
                                    options={vehYearOptions}
                                    selectedOptions={selectedVehYearOptions}
                                    onSelectedOptionsChange={handleSelectedVehYearOptionsChange}
                                    placeHolder="Years"

                                />
                            </FormGroup>
                            <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">Body Class</Label>
                                <DropDownSearch
                                    options={vehBodyClassOptions}
                                    selectedOptions={selectedvehBodyClassOptions}
                                    onSelectedOptionsChange={handleSelectedVehBodyClassOptions}
                                    placeHolder="Body Classes"

                                />
                            </FormGroup>
                            {/* <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">Body Category</Label>
                                <Input
                                    type="text"
                                    id='vin'
                                    required
                                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup> */}

                        </div>
                    </div>


                    <div className=" border border-solid-800 rounded-t-lg shadow-md my-8">
                        <div className="bg-gray-500/20 rounded-t-lg shadow-md w-full p-0 h-10 flex justify-start items-center ">
                            <p className="font-medium text-xl leading-tight text-gray-800 px-4 py-0 my-0"> Vehicle Damage</p>
                        </div>
                        <div className="grid gap-7 text-lg grid-cols-1 md:grid-cols-3 py-4 px-4 w-full">



                            <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">Plane of Impact/Primary</Label>
                                <DropDownSearch
                                    options={primaryDamageOptions}
                                    selectedOptions={selectedPrimaryDamageOptions}
                                    onSelectedOptionsChange={handleSelectedPrimaryDamageOptions}
                                    placeHolder="Plane of Impact"
                                />
                            </FormGroup>

                            <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">Plane of Sub-Section/Primary</Label>
                                <DropDownSearch
                                    options={secondaryDamageOptions}
                                    selectedOptions={selectedSecondaryDamageOptions}
                                    onSelectedOptionsChange={handleSelectedSecondaryDamageOptions}
                                    placeHolder="Plane of Sub-Section"
                                />
                            </FormGroup>

                            <FormGroup className="md:col-span-1">
                                <Label className="flex justify-start">PDOF</Label>
                                <NumberRangeSelect
                                    min={5}
                                    max={10}
                                />
                            </FormGroup>

                        </div>
                    </div>



                </Form>

            </div>
        </div>

    );
};

export default FilterSearchForm;








