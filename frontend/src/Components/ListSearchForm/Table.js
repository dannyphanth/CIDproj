const Table = ({ data }) => {

    function getMaxSeverity(data) {
        let maxSeverity = "Unknown"; // Initialize with a default value

        data.forEach((cases) => {
            cases.vehicles.forEach((vehicle) => {
                const vehSeverity = vehicle.DV_estimated_severity.toLowerCase();

                // Compare current vehicle severity with maxSeverity
                if (vehSeverity === "severe") {
                    if (maxSeverity !== "Severe") {
                        maxSeverity = "Severe";
                    }
                } else if (vehSeverity === "moderate") {
                    if (maxSeverity !== "Severe" && maxSeverity !== "Moderate") {
                        maxSeverity = "Moderate";
                    }
                } else if (vehSeverity === "minor") {
                    if (maxSeverity !== "Severe" && maxSeverity !== "Moderate" && maxSeverity !== "Minor") {
                        maxSeverity = "Minor";
                    }
                }
            });
        });

        return maxSeverity;
    }


    const maxSeverity = getMaxSeverity(data);




    return (
        <div className=" border border-gray-200 rounded-sm mt-2 block bg-transparent overflow-x-auto shadow-md rounded">
            <table className="w-full text-gray-700">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Case Number</th>
                        <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900"># of Vehicles</th>
                        <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Max Severity</th>
                        <th className="px-4 py-2 text-left text-sm font-medium leading-6 text-gray-900">Crash Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((cases) => (
                        <tr key={cases.id} className="border-b border-gray-200">
                            <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><a href={`/caseInfo/${cases.case_number}`}>{cases.case_number}</a></td>
                            <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cases.vehicles.length}</td>
                            <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  {maxSeverity}</td>
                            <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cases.crash_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
{/* <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cases.vehicles[0].make}</td>
                                <td className="px-4 py-2 text-left mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cases.vehicles[0].model}</td> */}
export default Table;

