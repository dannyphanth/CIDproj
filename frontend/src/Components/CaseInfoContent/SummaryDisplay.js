import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import SummaryTable from './SummaryTable';
import SummaryTable2 from './SummaryTable2';
import SummaryTable3 from './SummaryTable3';

function SummaryDisplay() {
    const { caseNumber } = useParams();
    return (
        <div className="flex items-start ">
            <div>
                <SideBar caseNumber={caseNumber} />
            </div>
            <div>
                <h1 className="font-sans font-light  mx-4"> Crash Overview</h1>
                <SummaryTable className="" />
                <SummaryTable2 />
                <SummaryTable3 />

            </div>
        </div>
    )
}

export default SummaryDisplay;