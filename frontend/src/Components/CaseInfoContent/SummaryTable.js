import { useData } from "../../CaseInfoDataContext"

function SummaryTable({ caseNumber }) {

    //Fetches caseinfo data from React's Context API
    const { data } = useData();

    //Filters all cases with case that matches caseNumber
    const caseData = data.find((cases) => cases.case_number === caseNumber) || [];


    return (

        <div className="">
            <div className="px-4 sm:px-0 mt-2 flex flex-col items-center justify-center ">
                <h3 className="text-base font-semibold leading-7 text-gray-900 ">Case Overview</h3>
                <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>
            <div className="mt-6 border border-gray-200">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Case Number</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{caseData.case_number}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0  ">
                        <dt className="text-sm font-medium leading-6 text-gray-900 ">Crash Date</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{caseData.crash_date}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Summary</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{caseData.case_summary}</dd>
                    </div>


                </dl>
            </div>

            <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-0 ">
                <strong className="text-gray-700 font-medium">Vehicles</strong>

                <div className="border border-gray-200 rounded-sm mt-3 block bg-transparent overflow-x-auto shadow-md rounded">
                    <table className="w-full text-gray-700 ">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                                <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Vehicle#</th>
                                <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Make</th>
                                <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Model</th>
                                <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Year</th>
                                <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Severity</th>

                            </tr>
                        </thead>
                        <tbody>
                            {caseData.vehicles &&
                                caseData.vehicles.map((vehicle, index) => (
                                    <tr key={vehicle.id} className="border-b border-gray-200">
                                        <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{index + 1}</td>
                                        <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.make}</td>
                                        <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.model}</td>
                                        <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.year}</td>
                                        <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vehicle.DV_estimated_severity}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div>


        </div>


    )
}

export default SummaryTable