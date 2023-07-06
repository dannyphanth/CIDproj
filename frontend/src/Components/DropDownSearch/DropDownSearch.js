import { useState } from 'react';
function DropDownSearch({ props }) {

    const [data, setData] = useState([]);
    const [userInput, setUserInput] = useState('');

    return (
        <div className="main">
            <input list="data" onChange={(e) => setData(e.target.value)} />
            <datalist id="data">
                {data.map((op) => <option>{op}</option>)}
            </datalist>
        </div>
    )
}
export default DropDownSearch;