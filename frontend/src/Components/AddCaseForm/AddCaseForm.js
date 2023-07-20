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


function AddCaseForm() {

    const [caseNumber, setCaseNumber] = useState("");
    const [caseSummary, setCaseSummary] = useState("")
    const [vin, setVin] = useState("")
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const [modelYear, setModelYear] = useState("");
    const [crashDate, setCrashDate] = useState("");

    const [generalAreaOfDamage, setGeneralAreaOfDamage] = useState("");
    const [objectContactedCategory, setObjectContactedCategory] = useState("");
    const [objectContacted, setObjectContacted] = useState("")
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



    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform database submission or API call with the form data

        try {
            const formData = {
                //Change car_vin to caseNumber in schema
                case_number: caseNumber,
                car_vin: vin,
                case_summary: caseSummary,
                crash_date: crashDate,
                car_make: carMake,
                car_model: carModel,
                car_year: modelYear,

                //CDC
                general_area_of_damage: generalAreaOfDamage,
                object_contacted_caategory: objectContactedCategory,
                force_direction: forceDirection,
                end_shift: endShift,
                clock: cdcClock,
                over_underride: overUnderride,
                heading_angle: headingAngle,
                deformation_location: deformationLocation,
                long_lateral: longLateral,
                vertical_lateral: verticalLateral,
                distribution: cdcDistribution,
                extent: cdcExtent,
                cdc_summary: cdcSummary

                //vehiclesInvolved: vehicleArr
            };


            const response = await axios.post('http://localhost:5000/cases', formData);

            // Reset form inputs
            setCaseNumber('');
            setVin('');
            setCrashDate('');
            setCarMake('');
            setCarModel('');
            setModelYear('');

            setGeneralAreaOfDamage('');
            setObjectContactedCategory('');
            setObjectContacted('');
            setForceDirection('');
            setEndShift('');
            setCdcClock('');
            setOverUnderride('');
            setHeadingAngle('');
            setDeformationLocation('');
            setLongLateral('');
            setVerticalLateral('');
            setCdcDistribution('');
            setCdcExtent('');
            setCdcSummary('');

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
                <FormGroup className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2 pl-0 justify-start">
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
                <FormGroup className="w-full lg:w-1/6 p-2">
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
            <FormGroup className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 mx-auto">
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


            {/* //Submit vehicle num here */}

            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 ">
                {/* First Row */}
                <div className="col-span-1 p-2 flex justify-center">
                    <FormGroup className="w-full sm:w-1/2 md:w-1/2 lg:w-3/5">
                        <Label for="Vin" className="flex justify-start">Vin</Label>
                        <Input
                            type="text"
                            id="vin"
                            value={vin}
                            onChange={(e) => setVin(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </FormGroup>
                </div>
                <div className="col-span-1 p-2 flex justify-center">
                    <FormGroup className="w-full sm:w-1/2 md:w-1/2 lg:w-3/5">
                        <Label for="carMake" className="flex justify-start">Car Make</Label>
                        <Input
                            type="text"
                            id="carMake"
                            value={carMake}
                            onChange={(e) => setCarMake(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </FormGroup>
                </div>

                {/* Second Row */}
                <div className="col-span-1 p-2 flex justify-center">
                    <FormGroup className="w-full sm:w-1/2 md:w-1/2 lg:w-3/5">
                        <Label for="carModel" className="flex justify-start">Car Model</Label>
                        <Input
                            type="text"
                            id="carModel"
                            value={carModel}
                            onChange={(e) => setCarModel(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </FormGroup>
                </div>
                <div className="col-span-1 p-2 flex justify-center">
                    <FormGroup className="w-full sm:w-1/2 md:w-1/2 lg:w-3/5">
                        <Label for="modelYear" className="flex justify-start">Model Year</Label>
                        <Input
                            type="text"
                            id="modelYear"
                            value={modelYear}
                            onChange={(e) => setModelYear(e.target.value)}
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
                            value={generalAreaOfDamage}
                            onChange={(e) => setGeneralAreaOfDamage(e.target.value)}
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
                            value={objectContactedCategory}
                            onChange={(e) => setObjectContactedCategory(e.target.value)}
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
                            value={objectContacted}
                            onChange={(e) => setObjectContacted(e.target.value)}
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
                            value={forceDirection}
                            onChange={(e) => setForceDirection(e.target.value)}
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
                            value={endShift}
                            onChange={(e) => setEndShift(e.target.value)}
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
                            value={cdcClock}
                            onChange={(e) => setCdcClock(e.target.value)}
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
                            value={overUnderride}
                            onChange={(e) => setOverUnderride(e.target.value)}
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
                            value={headingAngle}
                            onChange={(e) => setHeadingAngle(e.target.value)}
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
                            value={deformationLocation}
                            onChange={(e) => setDeformationLocation(e.target.value)}
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
                            value={longLateral}
                            onChange={(e) => setLongLateral(e.target.value)}
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
                            value={verticalLateral}
                            onChange={(e) => setVerticalLateral(e.target.value)}
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
                            value={cdcDistribution}
                            onChange={(e) => setCdcDistribution(e.target.value)}
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
                            value={cdcExtent}
                            onChange={(e) => setCdcExtent(e.target.value)}
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
                            value={cdcSummary}
                            onChange={(e) => setCdcSummary(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </FormGroup>
                </div>

            </div>

            <Button color="primary" type="submit" className="w-20 p-2 mt-4">
                Submit
            </Button>
        </Form >




    )
}

export default AddCaseForm; 