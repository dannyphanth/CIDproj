const Table = ({ data }) => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <tbody>
                        <tr>
                            <th>Case Number</th>
                            <th>Car Make</th>
                            <th>Car Model</th>
                            <th>Crash Date</th>
                        </tr>
                        {data.map((cases, index) => (
                            <tr key={cases.id}>
                                <td>
                                    <a href={`/caseInfo/${cases.case_number}`}>{cases.case_number} </a>
                                </td>
                                <td>{cases.vehicles[index].make}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Table;