import { useParams } from 'react-router-dom';

function SummaryDisplay() {
    const { caseNumber } = useParams();
    return (
        <div>
            <h1>Vin is {caseNumber}</h1>
        </div>
    )
}

export default SummaryDisplay;