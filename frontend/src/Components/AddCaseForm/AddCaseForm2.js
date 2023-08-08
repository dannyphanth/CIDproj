import { React, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'
import axios from 'axios'


function AddCaseForm2() {

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
        console.log({ vehiclesArr });
    };



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

            const response = await axios.post('http://localhost:5000/cases', formData);

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

        } catch (error) {
            console.error('Error: ', error);
        }
    };



    return (


        <Form onSubmit={handleSubmit} className=" border border-black-500 mx-12">
            <div className="flex justify-center">
                <h1 className="flex justify-center border-bottom w-1/2 text-2xl text-center font-semibold mb-4 pt-2">
                    Add Case
                </h1>
            </div>

            {/* Case Number and Crash Date */}
            <div className="flex flex-wrap justify-center ">
                <FormGroup className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-2 pl-0 justify-start">
                    <Label for="caseNumber" className="flex justify-start">Case Number</Label>
                    <Input
                        type="text"
                        id="caseNumber"
                        value={caseNumber}
                        onChange={(e) => setCaseNumber(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </FormGroup>
                <FormGroup className="w-full sm:w-4/5 md:w-1/6 lg:w-1/6 p-2">
                    <Label for="crashDate" className="flex justify-start">Crash Date</Label>
                    <Input
                        type="date"
                        id="crashDate"
                        value={crashDate}
                        onChange={(e) => setCrashDate(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                    />
                </FormGroup>
            </div>

            {/* Case Summary */}
            <FormGroup className="w-full sm:w-4/5 md:w-1/2 lg:w-1/2 p-2 mx-auto">
                <Label for="Summary" className="flex justify-start">Case Summary</Label>
                <textarea
                    type="text"
                    id="Summary"
                    value={caseSummary}
                    onChange={(e) => setCaseSummary(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </FormGroup>


            {vehiclesArr.map((vehicle, index) => (
                <div key={index}>

                    <div className="flex justify-center">
                        <h1 className="flex justify-center border-bottom w-1/2 text-2xl text-center font-semibold my-4">
                            {`Vehicle Info #${index + 1}`}
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 ">
                        {/* First Row */}
                        <div className="col-span-1 p-2 flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 p-2">
                                <Label for={`vin-${index}`} className="flex justify-start">Vin</Label>
                                <Input
                                    type="text"
                                    id={`vin-${index}`}
                                    value={vehicle.vin}
                                    onChange={(e) => handleVehicleChange(index, 'vin', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-span-1 p-2 flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 p-2">
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
                        </div>
                        {/* Second Row */}
                        <div className="col-span-1 p-2 flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 p-2">
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
                        </div>
                        <div className="col-span-1 p-2 flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 p-2">
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

                    <div className="flex justify-center">
                        <h1 className="flex justify-center border-bottom w-1/2 text-2xl text-center font-semibold my-4">
                            CDC
                        </h1>
                    </div>


                    {vehicle.cdcArr.map((cdc, cdcIndex) =>
                        <div className="grid lg:grid-cols-3">
                            {/* Row 1 */}
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input1" className="flex justify-start">General Area of Damage</Label>
                                    <Input
                                        type="text"
                                        id="general_area_of_damage"
                                        value={cdc.general_area_of_damage}
                                        onChange={(e) => handleVehicleChange(index, 'general_area_of_damage', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input2" className="flex justify-start">Object Contacted Category</Label>
                                    <Input
                                        type="text"
                                        id="object_contacted_category"
                                        value={cdc.object_contacted_category}
                                        onChange={(e) => handleVehicleChange(index, 'object_contacted_category', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input3" className="flex justify-start">Object Contacted</Label>
                                    <Input
                                        type="text"
                                        id="object_contacted"
                                        value={cdc.object_contacted}
                                        onChange={(e) => handleVehicleChange(index, 'object_contacted', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            {/* Row 2 */}
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input4" className="flex justify-start">Force Direction</Label>
                                    <Input
                                        type="text"
                                        id="force_direction"
                                        value={cdc.force_direction}
                                        onChange={(e) => handleVehicleChange(index, 'force_direction', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input5" className="flex justify-start">End Shift</Label>
                                    <Input
                                        type="text"
                                        id="end_shift"
                                        value={cdc.end_shift}
                                        onChange={(e) => handleVehicleChange(index, 'end_shift', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input6" className="flex justify-start">Clock</Label>
                                    <Input
                                        type="text"
                                        id="clock"
                                        value={cdc.clock}
                                        onChange={(e) => handleVehicleChange(index, 'clock', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            {/* Row 3 */}
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input4" className="flex justify-start">Over / Underride</Label>
                                    <Input
                                        type="text"
                                        id="over_underride"
                                        value={cdc.over_underride}
                                        onChange={(e) => handleVehicleChange(index, 'over_underride', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input5" className="flex justify-start">Heading Angle</Label>
                                    <Input
                                        type="text"
                                        id="heading_angle"
                                        value={cdc.heading_angle}
                                        onChange={(e) => handleVehicleChange(index, 'heading_angle', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input6" className="flex justify-start">Deformation Location</Label>
                                    <Input
                                        type="text"
                                        id="deformation_location"
                                        value={cdc.deformation_location}
                                        onChange={(e) => handleVehicleChange(index, 'deformation_location', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            {/* Row 4 */}
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input4" className="flex justify-start">Long / Lateral</Label>
                                    <Input
                                        type="text"
                                        id="longLateral"
                                        value={cdc.long_lateral}
                                        onChange={(e) => handleVehicleChange(index, 'long_lateral', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input5" className="flex justify-start">Vertical / Lateral</Label>
                                    <Input
                                        type="text"
                                        id="vertical_lateral"
                                        value={cdc.vertical_lateral}
                                        onChange={(e) => handleVehicleChange(index, 'vertical_lateral', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input6" className="flex justify-start">Distribution</Label>
                                    <Input
                                        type="text"
                                        id="distribution"
                                        value={cdc.distribution}
                                        onChange={(e) => handleVehicleChange(index, 'distribution', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            {/* Row 5 */}
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input4" className="flex justify-start">Extent</Label>
                                    <Input
                                        type="text"
                                        id="extent"
                                        value={cdc.extent}
                                        onChange={(e) => handleVehicleChange(index, 'extent', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>
                            <div className="flex justify-center">
                                <FormGroup className="w-full sm:w-4/5 p-2">
                                    <Label for="input5" className="flex justify-start">CDC Summary</Label>
                                    <Input
                                        type="text"
                                        id="cdc_summary"
                                        value={cdc.cdc_summary}
                                        onChange={(e) => handleVehicleChange(index, 'cdc_summary', e.target.value, cdcIndex)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </FormGroup>
                            </div>

                        </div>
                    )}
                    <div>
                        <Button color="secondary" type="button" className="w-20 p-2 mt-4" onClick={() => handleAddCDCEvent(index)}>
                            Add CDC Event
                        </Button>
                    </div>

                    <div className="flex justify-center">
                        <h1 className="flex justify-center border-bottom w-1/2 text-2xl text-center font-semibold my-4">
                            Delta V
                        </h1>
                    </div>


                    <div className="grid lg:grid-cols-3">

                        {/* Row 1 */}
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Basis for Delta V</Label>
                                <Input
                                    type="text"
                                    id="DV_basis"
                                    value={vehicle.DV_basis}
                                    onChange={(e) => handleVehicleChange(index, 'DV_basis', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Total</Label>
                                <Input
                                    type="text"
                                    id="DV_total"
                                    value={vehicle.DV_total}
                                    onChange={(e) => handleVehicleChange(index, 'DV_total', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Longitudinal</Label>
                                <Input
                                    type="text"
                                    id="DV_long"
                                    value={vehicle.DV_long}
                                    onChange={(e) => handleVehicleChange(index, 'DV_long', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        {/* ROW 2 */}
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Lateral</Label>
                                <Input
                                    type="text"
                                    id="DV_lateral"
                                    value={vehicle.DV_lateral}
                                    onChange={(e) => handleVehicleChange(index, 'DV_lateral', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Energy Absorption</Label>
                                <Input
                                    type="text"
                                    id="DV_energy_absorption"
                                    value={vehicle.DV_energy_absorption}
                                    onChange={(e) => handleVehicleChange(index, 'DV_energy_absorption', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Impact Speed</Label>
                                <Input
                                    type="text"
                                    id="DV_impact_speed"
                                    value={vehicle.DV_impact_speed}
                                    onChange={(e) => handleVehicleChange(index, 'DV_impact_speed', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        {/* ROW 3 */}
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Moment Arm</Label>
                                <Input
                                    type="text"
                                    id="DV_moment_arm"
                                    value={vehicle.DV_moment_arm}
                                    onChange={(e) => handleVehicleChange(index, 'DV_moment_arm', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Barrier Equivalent Speed</Label>
                                <Input
                                    type="text"
                                    id="DV_barrier_equivalent_speed"
                                    value={vehicle.DV_barrier_equivalent_speed}
                                    onChange={(e) => handleVehicleChange(index, 'DV_barrier_equivalent_speed', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Estimated Severity</Label>
                                <Input
                                    type="text"
                                    id="DV_estimated_severity"
                                    value={vehicle.DV_estimated_severity}
                                    onChange={(e) => handleVehicleChange(index, 'DV_estimated_severity', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        {/* ROW 4 */}
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input5" className="flex justify-start">Rank</Label>
                                <Input
                                    type="text"
                                    id="DV_rank"
                                    value={vehicle.DV_rank}
                                    onChange={(e) => handleVehicleChange(index, 'DV_rank', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>

                    </div>


                </div>
            ))
            };






            TESTING
            {/* TESTING */}



            <Button color="secondary" type="button" className="w-20 p-2 mt-4" onClick={handleAddVehicle}>
                Add Another Vehicle
            </Button>

            <Button color="primary" type="submit" className="w-20 p-2 mt-4" >
                Submit
            </Button>
        </Form >




    )
}

export default AddCaseForm2; 