
function SummaryTable({ caseNumber }) {

    // Initialize the state to hold the fetched data
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     // Fetching API Data

    //     //Update state with fetched data
    //     // setData(responseData);

    //     //catch error
    // })

    //Sample data... change later
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

    return (

        <div className="">
            <div className="px-4 sm:px-0 mt-2 flex flex-col items-center justify-center">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Case Overview</h3>
                <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>
            <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Case Number</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">12345</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="text-sm font-medium leading-6 text-gray-900 ">Crash Date</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">04/24/2020</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Summary</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>


                    {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Vin</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Make</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Toyota</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Model</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Camry</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Year</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">2020</dd>
                    </div> */}

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
                            {recentOrderData.map((order) => (
                                <tr key={order.id}>
                                    <td>#{order.id}</td>
                                    <td>#{order.product_id}</td>
                                    <td>{order.customer_name}</td>
                                    <td>{order.order_date}</td>
                                    <td>{order.order_total}</td>
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