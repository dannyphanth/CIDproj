const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Case Number</th>
                    <th>Car Make</th>
                    <th>Car Model</th>
                    <th>Crash Date</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.car_vin}</td>
                        <td>{item.car_make}</td>
                        <td>{item.car_model}</td>
                        <td>{item.crash_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;