import { React, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'
// import Select from 'react-select'
import axios from 'axios'


function AddCaseForm2() {

    const [caseNumber, setCaseNumber] = useState("");
    const [crashDate, setCrashDate] = useState("");
    const [caseSummary, setCaseSummary] = useState("")

    const [vin, setVin] = useState("")
    const [vehMake, setCarMake] = useState("");
    const [vehModel, setVehModel] = useState("");
    const [vehYear, setVehYear] = useState("");

    const [generalAreaOfDamage, setGeneralAreaOfDamage] = useState("");
    const [objectContactedCategory, setObjectContactedCategory] = useState([]);
    const [objectContacted, setObjectContacted] = useState([])
    const [forceDirection, setForceDirection] = useState(0);
    const [endShift, setEndShift] = useState("");
    const [cdcClock, setCdcClock] = useState("");
    const [overUnderride, setOverUnderride] = useState("");
    const [headingAngle, setHeadingAngle] = useState("");
    const [deformationLocation, setDeformationLocation] = useState("");
    const [longLateral, setLongLateral] = useState("");
    const [verticalLateral, setVerticalLateral] = useState("")
    const [cdcDistribution, setCdcDistribution] = useState("")
    const [cdcExtent, setCdcExtent] = useState("")
    const [cdcSummary, setCdcSummary] = useState("")




    const [vehiclesArr, setVehiclesArr] = useState([{
        vin: "",
        vehMake: "",
        vehModel: "",
        vehYear: "",
        generalAreaOfDamage: "",
        objectContactedCategory: "",
        objectContacted: "",
        forceDirection: "",
        endShift: "",
        cdcClock: "",
        overUnderride: "",
        headingAngle: "",
        deformationLocation: "",
        longitudinalLateral: "",
        verticalLateral: "",
        cdcDistribution: "",
        cdcExtent: "",
        cdcSummary: ""
    }]);

    //Function that adds empty vehicle
    const handleAddVehicle = () => {
        setVehiclesArr([...vehiclesArr, {
            vin: "",
            vehMake: "",
            vehModel: "",
            vehYear: "",
            generalAreaOfDamage: "",
            objectContactedCategory: "",
            objectContacted: "",
            forceDirection: "",
            endShift: "",
            cdcClock: "",
            overUnderride: "",
            headingAngle: "",
            deformationLocation: "",
            longitudinalLateral: "",
            verticalLateral: "",
            cdcDistribution: "",
            cdcExtent: "",
            cdcSummary: ""
        }])
    }

    const handleVehicleChange = (index, property, value) => {
        const updatedVehicles = [...vehiclesArr];
        updatedVehicles[index][property] = value;
        setVehiclesArr(updatedVehicles);
        console.log({ vehiclesArr });
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

                // Add more vehicles to the array if needed


            };


            const response = await axios.post('http://localhost:5000/cases', formData);

            // Reset form inputs
            setCaseNumber('');
            setCrashDate('');

            // setVin('');
            // setvehMake('');
            // setvehModel('');
            // setModelYear('');

            // setGeneralAreaOfDamage('');
            // setObjectContactedCategory('');
            // setObjectContacted('');
            // setForceDirection('');
            // setEndShift('');
            // setCdcClock('');
            // setOverUnderride('');
            // setHeadingAngle('');
            // setDeformationLocation('');
            // setLongLateral('');
            // setVerticalLateral('');
            // setCdcDistribution('');
            // setCdcExtent('');
            // setCdcSummary('');

            //setVehicles([])
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
                            {/* ... Existing input fields for the vehicle ... */}
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
                                    value={vehicle.vehMake}
                                    onChange={(e) => handleVehicleChange(index, 'vehMake', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        {/* Second Row */}
                        <div className="col-span-1 p-2 flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 p-2">
                                <Label for={`vehMake-${index}`} className="flex justify-start">Model</Label>
                                <Input
                                    type="text"
                                    id={`vehModel-${index}`}
                                    value={vehicle.vehModel}
                                    onChange={(e) => handleVehicleChange(index, 'vehModel', e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-span-1 p-2 flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 p-2">
                                <Label for={`vehYear-${index}`} className="flex justify-start">Year</Label>
                                <Input
                                    type="text"
                                    id={`vehYear-${index}`}
                                    value={vehicle.vehYear}
                                    onChange={(e) => handleVehicleChange(index, 'vehYear', e.target.value)}
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

                    <div className="grid lg:grid-cols-3">
                        {/* Row 1 */}
                        <div className="flex justify-center">
                            <FormGroup className="w-full sm:w-4/5 p-2">
                                <Label for="input1" className="flex justify-start">General Area of Damage</Label>
                                <Input
                                    type="text"
                                    id="generalAreaOfDamage"
                                    value={vehicle.generalAreaOfDamage}
                                    onChange={(e) => handleVehicleChange(index, 'generalAreaOfDamage', e.target.value)}
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
                                    id="objectContactedCategory"
                                    value={vehicle.objectContactedCategory}
                                    onChange={(e) => handleVehicleChange(index, 'objectContactedCategory', e.target.value)}
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
                                    id="objectContacted"
                                    value={vehicle.objectContacted}
                                    onChange={(e) => handleVehicleChange(index, 'objectContacted', e.target.value)}
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
                                    id="forceDirection"
                                    value={vehicle.forceDirection}
                                    onChange={(e) => handleVehicleChange(index, 'forceDirection', e.target.value)}
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
                                    id="endShift"
                                    value={vehicle.endShift}
                                    onChange={(e) => handleVehicleChange(index, 'endShift', e.target.value)}
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
                                    id="cdcClock"
                                    value={vehicle.cdcClock}
                                    onChange={(e) => handleVehicleChange(index, 'cdcClock', e.target.value)}
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
                                    id="overUnderride"
                                    value={vehicle.overUnderride}
                                    onChange={(e) => handleVehicleChange(index, 'overUnderride', e.target.value)}
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
                                    id="headingAngle"
                                    value={vehicle.headingAngle}
                                    onChange={(e) => handleVehicleChange(index, 'headingAngle', e.target.value)}
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
                                    id="deformationLocation"
                                    value={vehicle.deformationLocation}
                                    onChange={(e) => handleVehicleChange(index, 'deformationLocation', e.target.value)}
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
                                    value={vehicle.longitudinalLateral}
                                    onChange={(e) => handleVehicleChange(index, 'longitudinalLateral', e.target.value)}
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
                                    id="verticalLateral"
                                    value={vehicle.verticalLateral}
                                    onChange={(e) => handleVehicleChange(index, 'verticalLateral', e.target.value)}
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
                                    id="cdcDistribution"
                                    value={vehicle.cdcDistribution}
                                    onChange={(e) => handleVehicleChange(index, 'cdcDistribution', e.target.value)}
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
                                    id="cdcExtent"
                                    value={vehicle.cdcExtent}
                                    onChange={(e) => handleVehicleChange(index, 'cdcExtent', e.target.value)}
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
                                    id="cdcSummary"
                                    value={vehicle.cdcSummary}
                                    onChange={(e) => handleVehicleChange(index, 'cdcSummary', e.target.value)}
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