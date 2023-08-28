import { React, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'
import Select from 'react-select';

import axios from 'axios'
import fetchVehicleDecodeInfoForCase from './FetchVehicleDecodeInfo';


function AddCaseForm2() {

    const deformationLocationOptions = [
        { value: 'F Front', label: 'F Front' },
        { value: 'B Back (rear)', label: 'B Back (rear)' },
        { value: 'L Left Side', label: 'L Left Side' },
        { value: 'R Right Side', label: 'R Right Side' },
        { value: 'T Top', label: 'T Top' },
        { value: 'U Undercarriage', label: 'U Undercarriage' },
        { value: '9 Unknown', label: '9 Unknown' },
    ];

    const longLateralOptions = [
        { value: "D Distributed-side or end", label: "D Distributed-side or end" },
        { value: "L Left - front or rear", label: "L Left - front or rear" },
        { value: "C Center - front or rear", label: "C Center - front or rear" },
        { value: "R Right - front or rear", label: "R Right - front or rear" },
        { value: "F Side Front - left or right", label: "F Side Front - left or right" },
        { value: "P Side center section - L or R", label: "P Side center section - L or R" },
        { value: "B Side rear - left or right", label: "B Side rear - left or right" },
        { value: "Y Side (F + P) or end (L + C)", label: "Y Side (F + P) or end (L + C)" },
        { value: "Z Side (P + B) or end (C + R)", label: "Z Side (P + B) or end (C + R)" },
        { value: "9 Unknown", label: "9 Unknown" }
    ];

    const verticalLateralOptions = [
        { value: "A All", label: "A All" },
        { value: "H Top of Frame to top of Vehicle", label: "H Top of Frame to top of Vehicle" },
        { value: "E Everything Below Belt Line", label: "E Everything Below Belt Line" },
        { value: "G Belt Line and Above", label: "G Belt Line and Above" },
        { value: "M Middle—top of frame to belt line or hood", label: "M Middle—top of frame to belt line or hood" },
        { value: "Frame—top of frame, frame", label: "Frame—top of frame, frame" },
        { value: "L Bottom of frame (inc undercarriage)", label: "L Bottom of frame (inc undercarriage)" },
        { value: "Below undercarriage level", label: "Below undercarriage level" },
        { value: "W (wheels and tyres only)", label: "W (wheels and tyres only)" }
    ];

    const distributionOptions = [
        { value: "W Wide Impact Area", label: "W Wide Impact Area" },
        { value: "N Narrow Impact Area", label: "N Narrow Impact Area" },
        { value: "S Sidewipe", label: "S Sidewipe" },
        { value: "O Rollover (includes rolling onto side)", label: "O Rollover (includes rolling onto side)" },
        { value: "E Corner (extends from corner to = < 16in (410mm)", label: "E Corner (extends from corner to = < 16in (410mm)" },
        { value: "Conversion in impact type", label: "Conversion in impact type" },
        { value: "K Requires multiple CDC", label: "K Requires multiple CDC" },
        { value: "U No residual Deformation", label: "U No residual Deformation" }
    ];

    const buttonStyles = {
        backgroundColor: '#485b99',
        color: '#485b99',
    };

    const [caseNumber, setCaseNumber] = useState("");
    const [crashDate, setCrashDate] = useState("");
    const [caseSummary, setCaseSummary] = useState("")
    const [vehiclesArr, setVehiclesArr] = useState([{
        vin: "",
        make: "",
        model: "",
        year: "",
        cdcArr: [
            {
                general_area_of_damage: "",
                object_contacted_category: "",
                object_contacted: "",
                force_direction: "",
                end_shift: "",
                clock: "",
                over_underride: "",
                heading_angle: "",
                deformation_location: "",
                long_lateral: "",
                vertical_lateral: "",
                distribution: "",
                extent: "",
                cdc_summary: "",
            },
        ],
        DV_basis: "",
        DV_total: "",
        DV_long: "",
        DV_lateral: "",
        DV_energy_absorption: "",
        DV_impact_speed: "",
        DV_moment_arm: "",
        DV_barrier_equivalent_speed: "",
        DV_estimated_severity: "",
        DV_rank: "",

    }]);


    const [currentCDCIndex, setCurrentCDCIndex] = useState(0); // Initialize with default value


    //Function that adds empty vehicle to array of vehicles
    const handleAddVehicle = () => {
        setVehiclesArr([...vehiclesArr, {
            vin: "",
            make: "",
            model: "",
            year: "",
            cdcArr: [
                {
                    general_area_of_damage: "",
                    object_contacted_category: "",
                    object_contacted: "",
                    force_direction: "",
                    end_shift: "",
                    clock: "",
                    over_underride: "",
                    heading_angle: "",
                    deformation_location: "",
                    long_lateral: "",
                    vertical_lateral: "",
                    distribution: "",
                    extent: "",
                    cdc_summary: "",
                },
            ],
            DV_basis: "",
            DV_total: "",
            DV_long: "",
            DV_lateral: "",
            DV_energy_absorption: "",
            DV_impact_speed: "",
            DV_moment_arm: "",
            DV_barrier_equivalent_speed: "",
            DV_estimated_severity: "",
            DV_rank: "",
        }])
    }

    const handleAddCDCEvent = (vehicleIndex) => {
        const updatedVehicles = [...vehiclesArr];
        updatedVehicles[vehicleIndex].cdcArr.push({
            general_area_of_damage: "",
            object_contacted_category: "",
            object_contacted: "",
            force_direction: "",
            end_shift: "",
            clock: "",
            over_underride: "",
            heading_angle: "",
            deformation_location: "",
            long_lateral: "",
            vertical_lateral: "",
            distribution: "",
            extent: "",
            cdc_summary: "",
        });
        setVehiclesArr(updatedVehicles);

        setCurrentCDCIndex(currentCDCIndex + 1);
    }

    const handleRemoveCDCEvent = (vehicleIndex) => {
        const updatedVehicles = [...vehiclesArr];
        const vehicle = updatedVehicles[vehicleIndex];

        if (!vehicle || !vehicle.cdcArr || !vehicle.cdcArr[currentCDCIndex] || vehicle.cdcArr.length === 1) {
            // Handle error if necessary or return early
            return;
        }

        vehicle.cdcArr.pop();
        setVehiclesArr(updatedVehicles);
        setCurrentCDCIndex(currentCDCIndex - 1);
    }

    //updates vehicle array when user inputs  
    const handleVehicleChange = (vehicleIndex, property, value, cdcIndex) => {
        const updatedVehicles = [...vehiclesArr];
        const vehicle = updatedVehicles[vehicleIndex];

        if (!vehicle) {
            // Vehicle at the specified index does not exist, handle error if needed.
            return;
        }

        // Initialize cdcArr if missing
        if (!vehicle.cdcArr) {
            vehicle.cdcArr = [];
        }

        // Update the vehicle property
        vehicle[property] = value;

        // Check if cdcArr exists and has the specified index
        if (vehicle.cdcArr && vehicle.cdcArr[cdcIndex]) {
            vehicle.cdcArr[cdcIndex][property] = value;
        }

        setVehiclesArr(updatedVehicles);
        // console.log({ vehiclesArr });
    };

    const updateVehicleAmountForCase = async (caseData) => {
        try {
            const vehicle_amount = caseData.vehicles.length; // Calculate the number of vehicles
            const updatedCaseData = { ...caseData, vehicle_amount }; // Update caseData with vehicleAmount

            const response = await axios.patch('https://cid-crashviewer-api.vercel.app/cases/updateCase', updatedCaseData); // Send PATCH request

            console.log('Case data updated with vehicleAmount:', response.data.message);
        } catch (error) {
            console.error('Error updating case data:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform database submission or API call with the form data

        try {

            const formData = {
                case_number: caseNumber,
                crash_date: crashDate,
                case_summary: caseSummary,
                vehicles: vehiclesArr

            };

            const response = await axios.post('https://cid-crashviewer-api.vercel.app/cases', formData);

            // Reset form inputs
            setCaseNumber('');
            setCrashDate('');
            setCaseSummary('');
            setVehiclesArr([{
                vin: "",
                make: "",
                model: "",
                year: "",
                cdcArr: [
                    {
                        general_area_of_damage: "",
                        object_contacted_category: "",
                        object_contacted: "",
                        force_direction: "",
                        end_shift: "",
                        clock: "",
                        over_underride: "",
                        heading_angle: "",
                        deformation_location: "",
                        long_lateral: "",
                        vertical_lateral: "",
                        distribution: "",
                        extent: "",
                        cdc_summary: "",
                    },
                ],
                DV_basis: "",
                DV_total: "",
                DV_long: "",
                DV_lateral: "",
                DV_energy_absorption: "",
                DV_impact_speed: "",
                DV_moment_arm: "",
                DV_barrier_equivalent_speed: "",
                DV_estimated_severity: "",
                DV_rank: ""
            }])

            // Fetch vehicleDecodeInfo for the vehicles in the added case
            const addedCaseData = response.data;
            fetchVehicleDecodeInfoForCase(addedCaseData);

            // Update caseData with vehicleAmount and send PATCH request

            updateVehicleAmountForCase(addedCaseData);

        } catch (error) {
            console.error('Error: ', error);

        }
    };

    return (


        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">

                <Form onSubmit={handleSubmit} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    {/* Case Details Inputs */}
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 py-4">
                        <div className="text-gray-600">
                            <p className="font-medium text-lg">Case Details</p>
                            <p>Please fill out all the fields.</p>
                        </div>
                        {/* Case Number Input Field */}
                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <FormGroup className="md:col-span-3">
                                    <Label for="caseNumber" className="flex justify-start">Case Number</Label>
                                    <Input
                                        type="text"
                                        id="caseNumber"
                                        value={caseNumber}
                                        onChange={(e) => setCaseNumber(e.target.value)}
                                        required
                                        className="h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                                {/* Crash Date Input Field */}
                                <FormGroup className="md:col-span-2">
                                    <Label for="crashDate" className="flex justify-start">Crash Date</Label>
                                    <Input
                                        type="date"
                                        id="crashDate"
                                        value={crashDate}
                                        onChange={(e) => setCrashDate(e.target.value)}
                                        required
                                        className="h-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    />
                                </FormGroup>
                                {/* Case Summary Input Field */}
                                <FormGroup className="md:col-span-5">
                                    <Label for="Summary" className="flex justify-start">Case Summary</Label>
                                    <textarea
                                        type="text"
                                        id="Summary"
                                        value={caseSummary}
                                        onChange={(e) => setCaseSummary(e.target.value)}
                                        required
                                        className="h-20 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <div className="">

                    </div>

                    {vehiclesArr.map((vehicle, index) => (
                        <div key={index}>

                            <div className="border-t border-solid-500  grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 py-4">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">{`Vehicle Details #${index + 1}`}</p>
                                    <p>Please fill out all the fields.</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

                                        <FormGroup className="md:col-span-3">
                                            <Label for={`vin-${index}`} className="flex justify-start">Vin</Label>
                                            <Input
                                                type="text"
                                                id={`vin-${index}`}
                                                value={vehicle.vin}
                                                onChange={(e) => handleVehicleChange(index, 'vin', e.target.value)}
                                                required
                                                className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>

                                        <FormGroup className="md:col-span-3">
                                            <Label for={`make-${index}`} className="flex justify-start">Make</Label>
                                            <Input
                                                type="text"
                                                id={`make-${index}`}
                                                value={vehicle.make}
                                                onChange={(e) => handleVehicleChange(index, 'make', e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>

                                        <FormGroup className="md:col-span-3">
                                            <Label for={`make-${index}`} className="flex justify-start">Model</Label>
                                            <Input
                                                type="text"
                                                id={`model-${index}`}
                                                value={vehicle.model}
                                                onChange={(e) => handleVehicleChange(index, 'model', e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        <FormGroup className="md:col-span-3">
                                            <Label for={`year-${index}`} className="flex justify-start">Year</Label>
                                            <Input
                                                type="text"
                                                id={`year-${index}`}
                                                value={vehicle.year}
                                                onChange={(e) => handleVehicleChange(index, 'year', e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>

                                    </div>
                                </div>
                            </div>

                            {vehicle.cdcArr.map((cdc, cdcIndex) =>
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 py-4">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">  CDC Event #{cdcIndex + 1}</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 ">
                                            {/* Row 1 */}
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input1" className="flex justify-start">General Area of Damage</Label>
                                                <Input
                                                    type="text"
                                                    id="general_area_of_damage"
                                                    value={cdc.general_area_of_damage}
                                                    onChange={(e) => handleVehicleChange(index, 'general_area_of_damage', e.target.value, cdcIndex)}

                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input2" className="flex justify-start">Object Contacted Category</Label>
                                                <Input
                                                    type="text"
                                                    id="object_contacted_category"
                                                    value={cdc.object_contacted_category}
                                                    onChange={(e) => handleVehicleChange(index, 'object_contacted_category', e.target.value, cdcIndex)}

                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input3" className="flex justify-start">Object Contacted</Label>
                                                <Input
                                                    type="text"
                                                    id="object_contacted"
                                                    value={cdc.object_contacted}
                                                    onChange={(e) => handleVehicleChange(index, 'object_contacted', e.target.value, cdcIndex)}

                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            {/* Row 2 */}
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input4" className="flex justify-start">Force Direction (Degrees)</Label>
                                                <Input
                                                    type="number"
                                                    id="force_direction"
                                                    value={cdc.force_direction}
                                                    onChange={(e) => handleVehicleChange(index, 'force_direction', e.target.value, cdcIndex)}
                                                    min={-360}
                                                    max={360} // Pattern for values -180 to 180
                                                    onWheel={() => document.activeElement.blur()}
                                                    title="Value must be a number between -180 and 180 or left blank"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input5" className="flex justify-start">End Shift</Label>
                                                <Input
                                                    type="text"
                                                    id="end_shift"
                                                    value={cdc.end_shift}
                                                    onChange={(e) => handleVehicleChange(index, 'end_shift', e.target.value, cdcIndex)}

                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input6" className="flex justify-start">Clock</Label>
                                                <Input
                                                    type="number"
                                                    id="clock"
                                                    value={cdc.clock}
                                                    onChange={(e) => handleVehicleChange(index, 'clock', e.target.value, cdcIndex)}

                                                    min={1}
                                                    max={12}
                                                    onWheel={() => document.activeElement.blur()}
                                                    title="Value must be a number between 1 and 12 or left blank"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            {/* Row 3 */}
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input4" className="flex justify-start">Over / Underride</Label>
                                                <Input
                                                    type="text"
                                                    id="over_underride"
                                                    value={cdc.over_underride}
                                                    onChange={(e) => handleVehicleChange(index, 'over_underride', e.target.value, cdcIndex)}

                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input5" className="flex justify-start">Heading Angle (Degrees)</Label>
                                                <Input
                                                    type="number"
                                                    id="heading_angle"
                                                    value={cdc.heading_angle}
                                                    onChange={(e) => handleVehicleChange(index, 'heading_angle', e.target.value, cdcIndex)}
                                                    min={-360}
                                                    max={360}
                                                    onWheel={() => document.activeElement.blur()}
                                                    title="Value must be a number in correct range or left blank"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="deformation_location" className="flex justify-start">
                                                    Deformation Location
                                                </Label>
                                                <Select
                                                    id="deformation_location"
                                                    value={{
                                                        value: cdc.deformation_location,
                                                        label: cdc.deformation_location,
                                                    }}
                                                    options={deformationLocationOptions} // Replace with your array of options
                                                    onChange={(selectedOption) =>
                                                        handleVehicleChange(
                                                            index,
                                                            'deformation_location',
                                                            selectedOption.value,
                                                            cdcIndex
                                                        )
                                                    }

                                                    className="block w-full text-left shadow-md text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            {/* Row 4 */}
                                            <FormGroup className="md:col-span-2">
                                                <Label for="longLateral" className="flex justify-start">
                                                    Long / Lateral
                                                </Label>
                                                <Select
                                                    id="longLateral"
                                                    value={{
                                                        value: cdc.long_lateral,
                                                        label: cdc.long_lateral,
                                                    }}
                                                    options={longLateralOptions} // Replace with your array of options
                                                    onChange={(selectedOption) =>
                                                        handleVehicleChange(
                                                            index,
                                                            'long_lateral',
                                                            selectedOption.value,
                                                            cdcIndex
                                                        )
                                                    }

                                                    className="block w-full text-left shadow-md text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="vertical_lateral" className="flex justify-start">
                                                    Vertical / Lateral
                                                </Label>
                                                <Select
                                                    id="vertical_lateral"
                                                    value={{
                                                        value: cdc.vertical_lateral,
                                                        label: cdc.vertical_lateral,
                                                    }}
                                                    options={verticalLateralOptions} // Replace with your array of options
                                                    onChange={(selectedOption) =>
                                                        handleVehicleChange(
                                                            index,
                                                            'vertical_lateral',
                                                            selectedOption.value,
                                                            cdcIndex
                                                        )
                                                    }

                                                    className="block w-full text-left shadow-md text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="distribution" className="flex justify-start">
                                                    Distribution
                                                </Label>
                                                <Select
                                                    id="distribution"
                                                    value={{
                                                        value: cdc.distribution,
                                                        label: cdc.distribution,
                                                    }}
                                                    options={distributionOptions} // Replace with your array of options
                                                    onChange={(selectedOption) =>
                                                        handleVehicleChange(
                                                            index,
                                                            'distribution',
                                                            selectedOption.value,
                                                            cdcIndex
                                                        )
                                                    }

                                                    className="block w-full text-left shadow-md text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            {/* Row 5 */}
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input4" className="flex justify-start">Extent</Label>
                                                <Input
                                                    type="text"
                                                    id="extent"
                                                    value={cdc.extent}
                                                    onChange={(e) => handleVehicleChange(index, 'extent', e.target.value, cdcIndex)}

                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>
                                            <FormGroup className="md:col-span-2">
                                                <Label for="input5" className="flex justify-start">CDC Summary</Label>
                                                <Input
                                                    type="text"
                                                    id="cdc_summary"
                                                    value={cdc.cdc_summary}
                                                    onChange={(e) => handleVehicleChange(index, 'cdc_summary', e.target.value, cdcIndex)}

                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </FormGroup>


                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Add and Remove CDC Buttons */}
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-4">
                                <p></p>
                                <div className="lg:col-span-2">

                                    <div className="md:col-span-3 text-center">
                                        <Button
                                            className="w-32 h-12 bg-red-500 hover:bg-red-700 text-white font-bold rounded m-2 border-0 shadow-md ring-1 ring-inset ring-gray-300"
                                            type="button"
                                            color="secondary"
                                            onClick={() => handleRemoveCDCEvent(index)}>
                                            Remove Event
                                        </Button>
                                        <Button color="success" type="button" style={buttonStyles} className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-2 border-0 shadow-md ring-1 ring-inset ring-gray-300" onClick={() => handleAddCDCEvent(index)}>
                                            Add Event
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 py-4">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Delta V</p>
                                    <p>Please fill out all the fields.</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 mb-8">

                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Basis for Delta V</Label>
                                            <Input
                                                type="text"
                                                id="DV_basis"
                                                value={vehicle.DV_basis}
                                                onChange={(e) => handleVehicleChange(index, 'DV_basis', e.target.value)}

                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Total (mph)</Label>
                                            <Input
                                                type="number"
                                                id="DV_total"
                                                value={vehicle.DV_total}
                                                onChange={(e) => handleVehicleChange(index, 'DV_total', e.target.value)}
                                                onWheel={() => document.activeElement.blur()}
                                                min={0}
                                                max={300}
                                                title="Value must be a number or left blank"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Longitudinal (mph)</Label>
                                            <Input
                                                type="number"
                                                id="DV_long"
                                                value={vehicle.DV_long}
                                                onChange={(e) => handleVehicleChange(index, 'DV_long', e.target.value)}
                                                onWheel={() => document.activeElement.blur()}
                                                min={0}
                                                max={300}
                                                title="Value must be a number or left blank"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        {/* ROW 2 */}
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Lateral (mph)</Label>
                                            <Input
                                                type="number"
                                                id="DV_lateral"
                                                value={vehicle.DV_lateral}
                                                onChange={(e) => handleVehicleChange(index, 'DV_lateral', e.target.value)}
                                                onWheel={() => document.activeElement.blur()}
                                                min={0}
                                                max={300}
                                                title="Value must be a number or left blank"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Energy Absorption (Joules)</Label>
                                            <Input
                                                type="number"
                                                id="DV_energy_absorption"
                                                value={vehicle.DV_energy_absorption}
                                                onChange={(e) => handleVehicleChange(index, 'DV_energy_absorption', e.target.value)}
                                                onWheel={() => document.activeElement.blur()}
                                                title="Value must be a number or left blank"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Impact Speed (mph)</Label>
                                            <Input
                                                type="number"
                                                id="DV_impact_speed"
                                                value={vehicle.DV_impact_speed}
                                                onChange={(e) => handleVehicleChange(index, 'DV_impact_speed', e.target.value)}
                                                onWheel={() => document.activeElement.blur()}
                                                title="Value must be a number or left blank"

                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        {/* ROW 3 */}
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Moment Arm (cm)</Label>
                                            <Input
                                                type="number"
                                                id="DV_moment_arm"
                                                value={vehicle.DV_moment_arm}
                                                onChange={(e) => handleVehicleChange(index, 'DV_moment_arm', e.target.value)}
                                                onWheel={() => document.activeElement.blur()}
                                                title="Value must be a number or left blank"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Barrier Equivalent Speed</Label>
                                            <Input
                                                type="number"
                                                id="DV_barrier_equivalent_speed"
                                                value={vehicle.DV_barrier_equivalent_speed}
                                                onChange={(e) => handleVehicleChange(index, 'DV_barrier_equivalent_speed', e.target.value)}
                                                onWheel={() => document.activeElement.blur()}
                                                title="Value must be a number or left blank"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Estimated Severity</Label>
                                            <Input
                                                type="text"
                                                id="DV_estimated_severity"
                                                value={vehicle.DV_estimated_severity}
                                                onChange={(e) => handleVehicleChange(index, 'DV_estimated_severity', e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>
                                        {/* ROW 4 */}
                                        <FormGroup className="md:col-span-2">
                                            <Label for="input5" className="flex justify-start">Rank</Label>
                                            <Input
                                                type="text"
                                                id="DV_rank"
                                                value={vehicle.DV_rank}
                                                onChange={(e) => handleVehicleChange(index, 'DV_rank', e.target.value)}

                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </FormGroup>


                                    </div>
                                </div>
                            </div>


                        </div>
                    ))}

                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mb-8">
                        <p></p>
                        <div className="lg:col-span-2">

                            <div className="md:col-span-3 text-center">
                                <Button color="success" type="button" style={buttonStyles} className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-2 border-0 shadow-md ring-1 ring-inset ring-gray-300" onClick={handleAddVehicle}>
                                    Add Vehicle
                                </Button>

                                <Button color="primary" type="submit" className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-2 border-0 shadow-md ring-1 ring-inset ring-gray-300" >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>

                </Form>

            </div>
        </div>

    )
}

export default AddCaseForm2; 