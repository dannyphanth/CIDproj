//Import Icons
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

//import Data
import { useData } from '../../CaseInfoDataContext'

export const SideBarData = (caseNumber) => {

    //Fetches caseinfo data from React's Context API
    const { data } = useData();

    //Filters all cases with case that matches caseNumber
    const caseData = data.find((cases) => cases.case_number === caseNumber) || [];
    // Extract the vehicles array from the caseData object
    const vehicles = caseData.vehicles || [];

    // Creates the sub-navigation for each vehicle
    const vehicleSubNavs = vehicles.map((vehicle, index) => {
        const vehicleIndex = index + 1;
        return {
            title: `Vehicle ${vehicleIndex}`,
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Specifications',
                    path: `/caseInfo/${caseNumber}/vehicle/${vehicleIndex}/Specifications`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'CDC Data',
                    path: `/caseInfo/${caseNumber}/vehicle/${vehicleIndex}/CDCdata`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Delta V',
                    path: `/caseInfo/${caseNumber}/vehicle/${vehicleIndex}/DeltaV`,
                    icon: <IoIcons.IoIosPaper />,
                },
            ],
        };
    });



    return [

        {
            title: 'Crash Summary',
            // path: '/',
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Crash Summary',
                    path: `/caseInfo/${caseNumber}/Summary`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Scene Diagram',
                    path: `/caseInfo/${caseNumber}/SceneDiagram`,
                    icon: <IoIcons.IoIosPaper />,
                }
            ]
        },

        ...vehicleSubNavs,

        {
            title: 'Images',
            // path: `${previousPath}/Images`,
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Crash Scene',
                    path: `/caseInfo/${caseNumber}/CrashScene`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Vehicle Images',
                    path: `/caseInfo/${caseNumber}/VehicleImages`,
                    icon: <IoIcons.IoIosPaper />,
                }
            ]
        }

    ];
}