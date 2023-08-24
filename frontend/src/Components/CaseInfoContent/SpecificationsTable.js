import { useParams } from "react-router-dom";
import { useData } from "../../CaseInfoDataContext"
import { useState, useEffect } from 'react';
import axios from 'axios';

function SpecificationsTable({ caseNumber }) {
    //Retreives vehicle # from URL path
    const { vehicleNumber } = useParams();
    const vehicleIndex = vehicleNumber ? parseInt(vehicleNumber) - 1 : null;

    //Fetches caseinfo data from React's Context API
    const { data } = useData();

    //Filters all cases with case that matches caseNumber
    const caseData = data.find((cases) => cases.case_number === caseNumber) || [];

    // Check if vehicles exist and if vehicleIndex is within the valid range
    const vehicle = caseData.vehicles?.[vehicleIndex];

    // State to hold the additional vehicle decode information
    const [vehicleDecodeInfo, setVehicleDecodeInfo] = useState(null);

    // Function to fetch additional vehicle decode information from the public API
    const fetchVehicleDecodeInfo = async (vin, year) => {
        try {
            const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json&modelyear=${year}`);
            setVehicleDecodeInfo(response.data);

            console.log(vehicleDecodeInfo)
            // console.log("decode Info", response.data);
        } catch (error) {
            // Handle error if the API call fails
            console.error('Error fetching vehicle decode information:', error);
        }
    };

    useEffect(() => {
        // Fetch the vehicle decode info when the component mounts or the VIN changes
        if (vehicleIndex !== null && vehicle) {
            const vehicleVin = caseData.vehicles[vehicleIndex].vin;
            const vehicleYear = caseData.vehicles[vehicleIndex].year;
            fetchVehicleDecodeInfo(vehicleVin, vehicleYear);
        }

    }, [vehicleIndex, vehicle]);


    if (!vehicle) {
        // If vehicle data is not available, show a loading message or error message
        return <p>No vehicle decode data found for the caseNumber</p>;
    }

    // Array of keys and associated values to display
    const displayKeysWithValues = [
        { key: 'VehicleType', label: 'Vehicle Type' },
        { key: 'Manufacturer', label: 'Manufacturer' },
        { key: 'BodyClass', label: 'Body Class' },
        { key: 'Series', label: 'Series' },
        { key: 'PlantCountry', label: 'Plant Country' },
        { key: 'PlantCity', label: 'Plant City' },
        { key: 'Doors', label: 'Doors' },
        { key: 'GVWR', label: 'Gross Vehicle Weight Rating' },
        { key: 'BusType', label: 'Bus Type' },
        { key: 'BusFloorConfigType', label: 'Bus Floor Configuration Type' },
        { key: 'CustomMotorcycleType', label: 'Custom Motorcycle Type' },
        { key: 'MotorcycleSuspensionType', label: 'Motorcycle Suspension Type' },
        { key: 'MotorcycleChassisType', label: 'Motorcycle Chassis Type' },
        { key: 'TransmissionSpeeds', label: 'Transmission Speeds' },
        { key: 'TransmissionStyle', label: 'Transmission Style' },
        { key: 'BrakeSystemType', label: 'Brake System Type' },
        { key: 'EngineManufacturer', label: 'Engine Manufacturer' },
        { key: 'EngineModel', label: 'Engine Model' },
        { key: 'EngineConfiguration', label: 'Engine Configuration' },
        { key: 'EngineKW', label: 'Engine Power (kW)' },
        { key: 'EngineCylinders', label: 'Engine Number of Cylinders' },
        { key: 'EngineHP', label: 'Engine HP' },
        { key: 'DisplacementCI', label: 'Displacement (CI)' },
        { key: 'DisplacementCC', label: 'Displacement (CC)' },
        { key: 'DisplacementL', label: 'Displacement (L)' },
        { key: 'FuelTypePrimary', label: 'Fuel Type - Primary' },
        { key: 'ValveTrainDesign', label: 'Valve Train Design' },
        { key: 'AirBagLocFront', label: 'Front Air Bag Locations' },

    ];

    return (
        <div className="">
            <div className="px-4 sm:px-0 mt-2 flex flex-col items-center justify-center">
                <h3 className="text-large font-semibold leading-7 text-gray-900">Specifications</h3>
                <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>

            <div className="mt-6 border-t border-gray-200">
                {vehicle ? (
                    <dl className="divide-y divide-gray-200">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Vin</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {vehicle.vin ? (
                                    <>
                                        {vehicle.vin.substring(0, vehicle.vin.length - 6)}******
                                    </>
                                ) : (
                                    "Unknown"
                                )}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Make</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.make || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Model</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.model || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Year</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.year || "Unknown"}</dd>
                        </div>
                    </dl>
                ) : (<p>No vehicle data found for the caseNumber</p>)}

                {vehicleDecodeInfo ? (
                    <dl className="divide-y divide-gray-200">
                        {console.log("Vehicle decode", vehicleDecodeInfo)}
                        <div className="px-4 sm:px-0 mt-2 flex flex-col items-center justify-center">
                            <h3 className="text-large font-semibold leading-7 text-gray-900">Vehicle Decode</h3>
                        </div>
                        {vehicleDecodeInfo && vehicleDecodeInfo.Results[0].ErrorCode !== "0" && (
                            <p className="pt-4">Information not available</p>
                        )}
                        {displayKeysWithValues.map(({ key, label }) => {
                            const value = vehicleDecodeInfo.Results[0][key];
                            if (value !== "" && value !== undefined && value !== null) {
                                return (
                                    <div key={key} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 ">{label}</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value}</dd>
                                    </div>
                                );
                            } else {
                                return null; // Skip rendering if value is empty
                            }
                        })}
                    </dl>
                ) : (
                    <p>Fetching vehicle decode information...</p>
                )}

            </div>

        </div>


    )
}

export default SpecificationsTable