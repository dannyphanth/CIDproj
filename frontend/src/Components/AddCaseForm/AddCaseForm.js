import { React, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
    Row,
} from 'reactstrap'
// import Select from 'react-select'
import axios from 'axios'

// import {
//     AvForm,
//     AvField,
//     AvGroup,
//     AvInput,
//     AvFeedback,
//     // AvRadioGroup, 
//     // AvRadio, 
//     // AvCheckboxGroup, 
//     // AvCheckbox
// } from 'availity-reactstrap-validation'

function AddCaseForm() {

    const [caseNumber, setCaseNumber] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');
    const [modelYear, setModelYear] = useState('');
    const [crashDate, setCrashDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform database submission or API call with the form data

        try {
            const formData = {
                car_vin: caseNumber,
                car_make: carMake,
                car_model: carModel,
                car_year: modelYear,
                crash_date: crashDate
            };


            const response = await axios.post('http://localhost:5000/cases', formData);

            // Reset form inputs
            setCaseNumber('');
            setCarMake('');
            setCarModel('');
            setModelYear('');
            setCrashDate('');
        } catch (error) {
            console.error('Error: ', error);
        }
    };


    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="caseNumber">Case Number</Label>
                <Input
                    type="text"
                    id="caseNumber"
                    value={caseNumber}
                    onChange={(e) => setCaseNumber(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="carMake">Car Make</Label>
                <Input
                    type="text"
                    id="carMake"
                    value={carMake}
                    onChange={(e) => setCarMake(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="carModel">Car Model</Label>
                <Input
                    type="text"
                    id="carModel"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="modelYear">Model Year</Label>
                <Input
                    type="text"
                    id="modelYear"
                    value={modelYear}
                    onChange={(e) => setModelYear(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="crashDate">Crash Date</Label>
                <Input
                    type="date"
                    id="crashDate"
                    value={crashDate}
                    onChange={(e) => setCrashDate(e.target.value)}
                    required
                />
            </FormGroup>
            <Button color="primary" type="submit">
                Submit
            </Button>
        </Form>

    )
}

export default AddCaseForm;