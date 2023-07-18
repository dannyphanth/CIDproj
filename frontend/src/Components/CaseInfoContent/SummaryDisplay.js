import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

function SummaryDisplay() {
    const { caseNumber } = useParams();
    return (
        <div className="flex items-start ">
            <SideBar caseNumber={caseNumber} />
            <h1 className="font-sans font-light  mx-4"> Case Summary</h1>
        </div>
    )
}

export default SummaryDisplay;