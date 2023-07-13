//Import Icons
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const SideBarData = () => {

    const location = useLocation();
    const [previousPath, setPreviousPath] = useState('');

    console.log(location);

    useEffect(() => {
        setPreviousPath(location.pathname);
    }, [location]);

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
                    path: `${previousPath}/Summary`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Scene Diagram',
                    path: `${previousPath}/CrashSummary/SceneDiagram`,
                    icon: <IoIcons.IoIosPaper />,
                }
            ]
        },

        {
            title: 'Vehicle',
            // path: '/',
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Identification',
                    path: `${previousPath}/Vehicle/Identification`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Specificiations',
                    path: `${previousPath}/Vehicle/Specifications`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Delta V',
                    path: `${previousPath}/Vehicle/DeltaV`,
                    icon: <IoIcons.IoIosPaper />,
                }
            ]
        },

        {
            title: 'Images',
            // path: `${previousPath}/Images`,
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Crash Scene',
                    path: `${previousPath}/Images/CrashScene`,
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Vehicle Images',
                    path: `${previousPath}/Images/VehicleImages`,
                    icon: <IoIcons.IoIosPaper />,
                }
            ]
        }

    ];
}