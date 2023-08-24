import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import SpecificationsTable from './SpecificationsTable';
import Header from '../Header/Header';

function SpecificationsDisplay() {
    const { caseNumber } = useParams();

    return (
        <>
            <Header />
            <div className="flex">
                <div className="flex-0">
                    <SideBar caseNumber={caseNumber} />
                </div>
                <div className="flex-1">
                    <SpecificationsTable caseNumber={caseNumber} />
                </div>
            </div>
        </>
    )
}

export default SpecificationsDisplay