import { useParams } from 'react-router-dom';
import SideBar from '../../Components/SideBar/SideBar';

const CaseInfoPage = () => {
    const { caseNumber } = useParams();

    return (
        <>
            <SideBar caseNumber={caseNumber} />
        </>


    )
}

export default CaseInfoPage; 