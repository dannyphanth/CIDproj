import { useParams } from "react-router-dom";
import { useData } from "../../CaseInfoDataContext"


function DeltaVTable({ caseNumber }) {
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
                <h3 className="text-large font-semibold leading-7 text-gray-900">Delta V Data</h3>
                <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>

            <div className="mt-6 border-t border-gray-200">
                {vehicle ? (
                    <dl className="divide-y divide-gray-200">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Basis</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_basis || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Total</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_total || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Longitudinal</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_long || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Lateral</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_lateral || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Energy Absorption</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_energy_absorption || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Impact Speed</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_impact_speed || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Moment Arm</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_moment_arm || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Barrier Equivalent Speed</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_barrier_equivalent_speed || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Deformation Location</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.deformation_location || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Estimated Severity</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_estimated_severity || "Unknown"}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                            <dt className="text-sm font-medium leading-6 text-gray-900 ">Rank</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_rank || "Unknown"}</dd>
                        </div>

                    </dl>
                ) : (<p>No vehicle data found for the caseNumber</p>)}
            </div>

        </div>
    )
}

export default DeltaVTable