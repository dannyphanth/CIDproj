import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import SummaryTable from './SummaryTable';

function SummaryDisplay() {
    const { caseNumber } = useParams();

    return (
        <div className="flex">

            <SideBar caseNumber={caseNumber} />
            <SummaryTable caseNumber={caseNumber} />

        </div>
    )
}

export default SummaryDisplay;