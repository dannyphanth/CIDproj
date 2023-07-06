import { useParams } from 'react-router-dom';

const CaseInfoPage = () => {
    const { caseNumber } = useParams();

    return (
        console.log({ caseNumber })

    )
}

export default CaseInfoPage;