import { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/fa'
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div` 
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
position: fixed;
top: 0;
width: 100%;
`;

const NavIcon = styled(Link)`
margin-left 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SideBarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
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
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSideBar} />
                    </NavIcon>
                </Nav>
                <SideBarNav sideBar={sideBar}>
                    <SideBarWrap >
                        <NavIcon to="#">
                            <AiIcons.FaWindowClose onClick={showSideBar} />
                        </NavIcon>
                        {SideBarData(caseNumber).map((item, index) => {
                            return <SubMenu item={item} key={index} />
                        })}
                    </SideBarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </>
    );
};

export default SideBar;