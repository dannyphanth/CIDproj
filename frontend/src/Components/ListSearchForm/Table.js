const Table = ({ data }) => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Case Number</th>
                            <th className="px-4 py-2 text-left"># of Vehicles</th>
                            <th className="px-4 py-2 text-left">Make</th>
                            <th className="px-4 py-2 text-left">Model</th>
                            <th className="px-4 py-2 text-left">Severity</th>
                            <th className="px-4 py-2 text-left">Crash Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cases) => (
                            <tr key={cases.id}>
                                <td className="border px-4 py-2 text-left">
                                    <a href={`/caseInfo/${cases.case_number}`}>{cases.case_number}</a>
                                </td>
                                <td className="border px-4 py-2 text-left">{cases.vehicles.length}</td>
                                <td className="border px-4 py-2 text-left">{cases.vehicles[0].make}</td>
                                <td className="border px-4 py-2 text-left">{cases.vehicles[0].model}</td>
                                <td className="border px-4 py-2 text-left">
                                    {cases.vehicles[0].DV_estimated_severity}
                                </td>
                                <td className="border px-4 py-2 text-left">{cases.crash_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;

