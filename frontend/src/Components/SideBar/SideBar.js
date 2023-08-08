import { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/fa'
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const SideBarNav = styled.nav`
background: #15171c;
height: 100vh;
display: flex;

justify-content: center;


top: 0;
left: ${({ sideBar }) => (sideBar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;

const SideBarWrap = styled.div`
width: 100%;
`;

const SideBar = ({ caseNumber }) => {

    const [sideBar, setSideBar] = useState(true)

    const showSideBar = () => setSideBar(!sideBar)

    return (

        <IconContext.Provider value={{ color: '#fff' }}>
            <SideBarNav sideBar={sideBar} className="sticky w-72 lg:flex-shrink-0 overflow-y-auto">
                <SideBarWrap >
                    {SideBarData(caseNumber).map((item, index) => {
                        return <SubMenu
                            item={item}
                            key={index}
                        />
                    })}
                </SideBarWrap>
            </SideBarNav>
        </IconContext.Provider>

    );
};

export default SideBar;