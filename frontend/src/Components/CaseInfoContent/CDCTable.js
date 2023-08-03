import { useParams } from "react-router-dom";
import { useData } from "../../CaseInfoDataContext"


function CDCTable({ caseNumber }) {
    //Retreives vehicle # from URL path
    const { vehicleNumber } = useParams();
    const vehicleIndex = vehicleNumber ? parseInt(vehicleNumber) - 1 : null;


    //Fetches caseinfo data from React's Context API
    const { data } = useData();

    //Filters all cases with case that matches caseNumber
    const caseData = data.find((cases) => cases.case_number === caseNumber) || [];

    // Check if vehicles exist and if vehicleIndex is within the valid range
    const vehicle = caseData.vehicles?.[vehicleIndex];

    return (

        <div className="">
            <div className="px-4 sm:px-0 mt-2 flex flex-col items-center justify-center">
                <h3 className="text-base font-semibold leading-7 text-gray-900">CDC Data</h3>
                <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-gray-500">{`Vehicle ${vehicleNumber} ${vehicle.general_area_of_damage} vs ${vehicle.object_contacted}`}</p>
            </div>

            <div className="mt-6 border-t border-gray-200">
                {vehicle ? (
                    <dl className="divide-y divide-gray-200">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900">General Area of Damage</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.general_area_of_damage || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Objact Contacted Category</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.object_contacted_category || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Object Contacted</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.object_contacted || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Force Direction</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.force_direction || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">End Shift</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.end_shift || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Clock</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.clock || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Over / Underride</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.over_underride || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Heading Angle</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.heading_angle || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Deformation Location</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.deformation_location || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Long Lateral</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.long_lateral || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Vertical Lateral</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.vertical_lateral || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Distribution</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.distribution || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Extent</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.extent || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">CDC Summary</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.cdc_summary || "Unknown"}</dd>
                        </div>
                    </dl>
                ) : (<p>No vehicle data found for the caseNumber</p>)}
            </div>

        </div>
    )
}

export default CDCTable