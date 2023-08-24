import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import DeltaVTable from './DeltaVTable';
import Header from '../Header/Header';

function DeltaVDisplay() {
    const { caseNumber } = useParams();

    return (
        <>
            <Header />
            <div className="flex">
                <div className="flex-0">
                    <SideBar caseNumber={caseNumber} />
                </div>
                <div className="flex-1">
                    <DeltaVTable caseNumber={caseNumber} />
                </div>
            </div>
        </>
    )
}

export default DeltaVDisplay