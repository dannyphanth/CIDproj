import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as AiIcons from 'react-icons/ai'
import {
    Form,
    Button,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'
import DropDownSearch from '../DropDownSearch/DropDownSearch';
import NumberRangeSelect from './NumberRangeSelect';
import Table from '../ListSearchForm/Table';

const FilterSearchForm = () => {

    const [showTable, setShowTable] = useState(false); // Add this line
    const [filteredCases, setFilteredCases] = useState([]); // Define filteredCases state


    const buttonStyles = {
        backgroundColor: '#485b99', // Set your desired background color
        color: '#485b99', // Set your desired text color
    };


    // Array States for all query options
    const [vehMakeOptions, setVehMakeOptions] = useState([]);
    const [vehModelOptions, setVehModelOptions] = useState([]);
    const [vehYearOptions, setVehYearOptions] = useState([]);
    const [vehBodyClassOptions, setVehBodyClassOptions] = useState([]);
    const primaryDamageOptions = ["F Front", "B Back (rear)", "L Left Side", "R Right Side", "T Top", "U Undercarriage", "9 Unknown"];
    const secondaryDamageOptions = ["D Distributed-side or end", "L Left - front or rear", "C Center - front or rear", "R Right - front or rear", "F Side Front - left or right", "P Side center section - L or R", "B Side rear - left or right", "Y Side (F + P) or end (L + C)", "Z Side (P + B) or end (C + R)", "9 Unknown"];
    const vehSeverity = ["Minor", "Moderate", "Major", "Critical"]

    // Array States for all user query selections
    const [crashDate, setCrashDate] = useState("");
    const [selectedVehAmountSliderValue, setSelectedVehAmountSliderValue] = useState([]);
    const [selectedVehSeverityOptions, setSelectedVehSeverityOptions] = useState([]);
    const [selectedVehMakeOptions, setSelectedVehMakeOptions] = useState([]);
    const [selectedVehModelOptions, setSelectedVehModelOptions] = useState([]);
    const [selectedVehYearOptions, setSelectedVehYearOptions] = useState([]);
    const [selectedVehBodyClassOptions, setSelectedVehBodyClassOptions] = useState([]);
    const [selectedPrimaryDamageOptions, setSelectedPrimaryDamageOptions] = useState([]);
    const [selectedSecondaryDamageOptions, setSelectedSecondaryDamageOptions] = useState([]);
    const [selectedPDOFSliderValue, setSelectedPDOFSliderValue] = useState([])
    const [selectedDeltaVsliderValue, setSelectedDeltaVSliderValue] = useState([])
    const [selectedBESsliderValue, setSelectedBESSliderValue] = useState([])


    //Handle user selecting Vehicle Amount value from slider
    const handleVehAmountSliderValueChange = (newValue) => {
        setSelectedVehAmountSliderValue(newValue);
    }

    //Handle user selecting vehicle max severity options from dropdown
    const handleSelectedVehSeverityOptions = (newSelectedVehSeverityOptions) => {
        setSelectedVehSeverityOptions(newSelectedVehSeverityOptions);
    }

    //Handle user selecting vehicle make options from dropdown 
    const handleSelectedVehMakeOptionsChange = (newSelectedVehMakeOptions) => {
        setSelectedVehMakeOptions(newSelectedVehMakeOptions);
    };

    //Handle user selecting vehicle model options from dropdown 
    const handleSelectedVehModelOptionsChange = (newSelectedVehModelOptions) => {
        setSelectedVehModelOptions(newSelectedVehModelOptions);
    };

    //Handle user selecting vehicle year options from dropdown 
    const handleSelectedVehYearOptionsChange = (newSelectedVehYearOptions) => {
        setSelectedVehYearOptions(newSelectedVehYearOptions);
    }

    //Handle user selecting vehicle body class options from dropdown 
    const handleSelectedVehBodyClassOptions = (newSelectedVehBodyClassOptions) => {
        setSelectedVehBodyClassOptions(newSelectedVehBodyClassOptions);
    }

    //Handle user selecting vehicle Primary Damage options from dropdown
    const handleSelectedPrimaryDamageOptions = (newSelectedPrimaryDamageOptions) => {
        setSelectedPrimaryDamageOptions(newSelectedPrimaryDamageOptions);
    }

    //Handle user selecting vehicle Seconday Damage options from dropdown
    const handleSelectedSecondaryDamageOptions = (newSelectedSecondaryDamageOptions) => {
        setSelectedSecondaryDamageOptions(newSelectedSecondaryDamageOptions);
    }
    //Handle user selecting PDOF value from slider
    const handlePDOFSliderValueChange = (newValue) => {
        setSelectedPDOFSliderValue(newValue);
    }

    //Handle user selecting Delta V value from slider
    const handleDeltaVSliderValueChange = (newValue) => {
        setSelectedDeltaVSliderValue(newValue);
    }

    //Handle user selecting Barrier Equivalent Speed value from slider
    const handleBESSliderValueChange = (newValue) => {
        setSelectedBESSliderValue(newValue);
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

    const resetForm = () => {
        setCrashDate("");
        setSelectedVehAmountSliderValue([]);
        setSelectedVehSeverityOptions([]);
        setSelectedVehMakeOptions([]);
        setSelectedVehModelOptions([]);
        setSelectedVehYearOptions([]);
        setSelectedVehBodyClassOptions([]);
        setSelectedPrimaryDamageOptions([]);
        setSelectedSecondaryDamageOptions([]);
        setSelectedPDOFSliderValue([]);
        setSelectedDeltaVSliderValue([]);
        setSelectedBESSliderValue([]);
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        console.log("vehicle makes", selectedVehMakeOptions)
        try {
            const response = await axios.get('https://cid-crashviewer-api.vercel.app/cases/filter', {
                params: {
                    crashDate,
                    selectedVehAmountSliderValue,
                    selectedVehSeverityOptions,
                    selectedVehMakeOptions,
                    selectedVehModelOptions,
                    selectedVehYearOptions,
                    selectedVehBodyClassOptions,
                    selectedPrimaryDamageOptions,
                    selectedSecondaryDamageOptions,
                    selectedPDOFSliderValue,
                    selectedDeltaVsliderValue,
                    selectedBESsliderValue
                },
            });

            resetForm();

            // Handle the response data (filtered cases)
            const filteredCases = response.data;
            console.log("Filtered Cases", filteredCases)

            setShowTable(true);
            setFilteredCases(filteredCases);

        } catch (error) {
            console.error('Error fetching filtered cases:', error);
        }



    };



    return (

        <div className="min-h-screen p-6 bg-gray-100  flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">

                {showTable ? (
                    <div>
                        <div className="flex justify-start">
                            <Button
                                color="primary"
                                onClick={() => setShowTable(false)}
                                style={buttonStyles}
                                className="h-12 hover:bg-blue-700 text-white font-bold rounded border-0 shadow-md ring-1 ring-inset ring-gray-300 inline-block"
                            >
                                <div className="flex justify-start items-center">
                                    <AiIcons.AiOutlineSearch className="mr-2" /> {/* Add margin-right to create space between icon and text */}
                                    <span className="whitespace-nowrap overflow-hidden overflow-ellipsis"
                                    >New Filter
                                    </span> {/* Use flex-grow to make the text grow */}
                                </div>
                            </Button>
                        </div>
                        <Table data={filteredCases} />
                    </div>
                ) : (
                    <Form onSubmit={handleSearch} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        {/* Crash Info */}
                        <div className=" border border-solid-800 rounded-t-lg shadow-md my-8">
                            <div className="bg-gray-500/20 rounded-t-lg shadow-md w-full p-0 h-10 flex justify-start items-center ">
                                <p className="font-medium text-xl leading-tight text-gray-800 px-4 py-0 my-0">Crash Information</p>
                            </div>
                            <div className="grid gap-7 text-lg grid-cols-1 md:grid-cols-3 py-4 px-4 w-full">

                                <FormGroup className="md:col-span-1">
                                    <Label className="flex justify-start ">Crash Date</Label>
                                    <Input
                                        type="date"
                                        id="crashDate"
                                        value={crashDate}
                                        onChange={(e) => setCrashDate(e.target.value)}
                                        className="shadow-md rounded-none"
                                        style={{
                                            color: '#9CA3AF', '::placeholder': { color: '#9CA3AF' },
                                            fontWeight: '450',
                                            borderRadius: 0
                                        }}

                                    />
                                </FormGroup>
                                <FormGroup className="md:col-span-1">
                                    <Label className="flex justify-start">Number of Vehicles</Label>
                                    <NumberRangeSelect
                                        handleSliderValueChange={handleVehAmountSliderValueChange}
                                        minValue={1}
                                        maxValue={10}
                                        queryVariable="Vehicles"

                                    />
                                </FormGroup>
                                <FormGroup className="md:col-span-1">
                                    <Label className="flex justify-start">Severity</Label>
                                    <DropDownSearch
                                        options={vehSeverity}
                                        selectedOptions={selectedVehSeverityOptions}
                                        onSelectedOptionsChange={handleSelectedVehSeverityOptions}
                                        placeHolder="Severity"
                                    />
                                </FormGroup>
                                {console.log("selectedVehSeveityOptions", selectedVehAmountSliderValue)}

                            </div>
                        </div>


                        {/* Vehicle Details */}
                        <div className=" border border-solid-800 rounded-t-lg shadow-md">
                            <div className="bg-gray-500/20 rounded-t-lg shadow-md w-full p-0 h-10 flex justify-start items-center ">
                                <p className="font-medium text-xl leading-tight text-gray-800 px-4 py-0 my-0">Vehicle Details</p>
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
                                        selectedOptions={selectedVehBodyClassOptions}
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

                        {/* Vehicle Damage */}
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
                                        handleSliderValueChange={handlePDOFSliderValueChange}
                                        minValue={-180}
                                        maxValue={180}
                                        queryVariable="Degrees"
                                    />
                                </FormGroup>

                                <FormGroup className="md:col-span-1">
                                    <Label className="flex justify-start">Delta V</Label>
                                    <NumberRangeSelect
                                        handleSliderValueChange={handleDeltaVSliderValueChange}
                                        minValue={0}
                                        maxValue={200}
                                        queryVariable="MPH"
                                    />
                                </FormGroup>

                                <FormGroup className="md:col-span-1">
                                    <Label className="flex justify-start">Barrier Equivalent Speed</Label>
                                    <NumberRangeSelect
                                        handleSliderValueChange={handleBESSliderValueChange}
                                        minValue={0}
                                        maxValue={200}
                                        queryVariable="MPH"
                                    />
                                </FormGroup>


                            </div>
                        </div>

                        <div className="flex justify-end">
                            <div className="flex justify-start">
                                <Button
                                    color="primary"
                                    type="submit" style={buttonStyles}
                                    className="w-32 h-12 hover:bg-blue-700 text-white font-bold rounded border-0 shadow-md ring-1 ring-inset ring-gray-300 "
                                >
                                    <div className="flex justify-center items-center">
                                        <AiIcons.AiOutlineSearch className="mr-2" /> {/* Add margin-right to create space between icon and text */}
                                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis"
                                        >Search
                                        </span> {/* Use flex-grow to make the text grow */}
                                    </div>
                                </Button>
                            </div>
                        </div>

                    </Form>
                )}

            </div>
        </div>

    );
};

export default FilterSearchForm;








