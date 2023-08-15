import { useParams } from 'react-router-dom';
import SideBar from '../../Components/SideBar/SideBar';
import SummaryTable from '../../Components/CaseInfoContent/SummaryTable';
import Header from '../../Components/Header/Header';

const CaseInfoPage = () => {
    const { caseNumber } = useParams();

    return (
        <>
            <Header />
            <div className="flex">
                <div className="flex-0">
                    <SideBar caseNumber={caseNumber} />
                </div>
                <div className="flex-1">
                    <SummaryTable caseNumber={caseNumber} />
                </div>
            </div>
        </>

    )
}

export default CaseInfoPage; 