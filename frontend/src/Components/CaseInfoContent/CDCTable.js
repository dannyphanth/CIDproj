import { useParams } from "react-router-dom";
import { useData } from "../../CaseInfoDataContext"


function CDCTable({ caseNumber }) {
    //Retreives vehicle # from URL path
    const { vehicleNumber } = useParams();
    const { CDCNumber } = useParams();
    const vehicleIndex = vehicleNumber ? parseInt(vehicleNumber) - 1 : null;
    const cdcIndex = CDCNumber ? parseInt(CDCNumber) - 1 : null;


    //Fetches caseinfo data from React's Context API
    const { data } = useData();

    //Filters all cases with case that matches caseNumber
    const caseData = data.find((cases) => cases.case_number === caseNumber) || [];

    // Check if vehicles exist and if vehicleIndex is within the valid range
    const vehicle = caseData.vehicles?.[vehicleIndex];
    console.log('vehivlce', vehicle)

    const cdc = vehicle?.cdcArr[cdcIndex]
    console.log('cdc', cdc)

    return (


        <div className="">
            {vehicle && cdc ? (
                <div>
                    <div className="px-4 sm:px-0 mt-2 flex flex-col items-center justify-center">

                        <h3 className="text-large font-semibold leading-7 text-gray-900">CDC Data</h3>
                        <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-gray-500">{`Vehicle ${vehicleNumber} ${cdc.general_area_of_damage} vs ${cdc.object_contacted}`}</p>
                    </div>

                    <div className="mt-6 border-t border-gray-200">

                        <dl className="divide-y divide-gray-200">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900">General Area of Damage</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.general_area_of_damage || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Objact Contacted Category</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.object_contacted_category || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Object Contacted</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.object_contacted || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Force Direction</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${cdc.force_direction} Degrees` || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">End Shift</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.end_shift || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Clock</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.clock || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Over / Underride</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.over_underride || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Heading Angle</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${cdc.heading_angle} Degrees` || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Deformation Location</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.deformation_location || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Long Lateral</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.long_lateral || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Vertical Lateral</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.vertical_lateral || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Distribution</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.distribution || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">Extent</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.extent || "Unknown"}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 ">CDC Summary</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cdc.cdc_summary || "Unknown"}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            ) : (<p>No vehicle data found for the caseNumber</p>)}

        </div>
    )
}

export default CDCTable