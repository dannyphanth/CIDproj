import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

function SummaryDisplay() {
    const { caseNumber } = useParams();
    return (
        <div>
            <SideBar />
        </div>
    )
}

export default SummaryDisplay;