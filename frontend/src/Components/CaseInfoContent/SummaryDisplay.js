import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import SummaryTable from './SummaryTable';

function SummaryDisplay() {
    const { caseNumber } = useParams();

    return (
        <div className="flex">
            <div className="flex-0">
                <SideBar caseNumber={caseNumber} />
            </div>
            <div className="flex-1">
                <SummaryTable caseNumber={caseNumber} />
            </div>
        </div>
    )
}

export default SummaryDisplay;