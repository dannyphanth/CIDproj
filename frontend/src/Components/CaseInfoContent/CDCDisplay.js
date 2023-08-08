import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import CDCTable from './CDCTable';

function CDCDisplay() {
    const { caseNumber } = useParams();

    return (
        <div className="flex">
            <div className="flex-0">
                <SideBar caseNumber={caseNumber} />
            </div>
            <div className="flex-1">
                <CDCTable caseNumber={caseNumber} />
            </div>
        </div>
    )
}

export default CDCDisplay