import { useData } from "../../CaseInfoDataContext"

function SummaryTable({ caseNumber }) {

    const recentOrderData = [
        {
            id: '1',
            product_id: 'Toyota',
            customer_id: 'Corolla',
            customer_name: 'Shirley A. Lape',
            order_date: '2020',
            order_total: '$435.50',

        }
    ]

    //Fetches caseinfo data from React's Context API
    const { data } = useData();

    //Filters all cases with case that matches caseNumber
    const caseData = data.find((vehicle) => vehicle.case_number === caseNumber) || [];


    return (

        <div className="">
            <div className="px-4 sm:px-0 mt-2 flex flex-col items-center justify-center">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Case Overview</h3>
                <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>
            {console.log("Vechicle api", { caseData })}

            <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Case Number</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{caseData.case_number}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="text-sm font-medium leading-6 text-gray-900 ">Crash Date</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{caseData.crash_date}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Summary</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{caseData.case_summary}</dd>
                    </div>


                </dl>
            </div>

            <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <strong className="text-gray-700 font-medium">Vehicles</strong>
                <div className="border-x border-gray-200 rounded-sm mt-3">
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr>
                                <th>Vehicle#</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Damage Plane</th>

                            </tr>
                        </thead>
                        <tbody>
                            {caseData.vehicles &&
                                caseData.vehicles.map((vehicle, index) => (
                                    <tr key={vehicle.id}>
                                        <td>#{index + 1}</td>
                                        <td>{vehicle.make}</td>
                                        <td>{vehicle.model}</td>
                                        <td>{vehicle.year}</td>
                                        <td>{vehicle.general_area_of_damage}</td>
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