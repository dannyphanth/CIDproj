import { useParams } from 'react-router-dom';
import SideBar from '../../Components/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CaseInfoPage = () => {
    const { caseNumber } = useParams();

    return (
        <>
            {/* console.log({caseNumber}) */}

            <SideBar />

        </>

    )
}

export default CaseInfoPage; 