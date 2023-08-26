import axios from 'axios';

const fetchVehicleDecodeInfoForCase = async (caseData) => {
    try {
        // Loop through each vehicle in the case and fetch vehicleDecodeInfo
        for (const vehicle of caseData.vehicles) {
            const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vehicle.vin}?format=json&modelyear=${vehicle.year}`);
            const vehicleDecodeInfo = response.data;

            // Update the vehicleDecodeInfo property in the caseData object
            vehicle.body_class = vehicleDecodeInfo.Results[0].BodyClass || "Unknown";

        }

        const updatedCaseData = caseData; // You already have the updated data
        console.log("updated Case data", updatedCaseData);
        await axios.patch(`https://cid-crashviewer-api.vercel.app/cases/updateCase`, updatedCaseData);


    } catch (error) {
        console.error('Error fetching vehicle decode information for case:', error);
    }
};


export default fetchVehicleDecodeInfoForCase;
