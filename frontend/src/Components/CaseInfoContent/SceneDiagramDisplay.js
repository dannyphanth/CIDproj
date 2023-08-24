import React from 'react'
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';

function SceneDiagramDisplay() {
    const { caseNumber } = useParams();

    return (
        <>
            <Header />
            <div className="flex">
                <div className="flex-0">
                    <SideBar caseNumber={caseNumber} />
                </div>
                <div className="flex-1">
                    <h1>Feature Not Implemented Yet...</h1>
                </div>
            </div>
        </>)
}

export default SceneDiagramDisplay