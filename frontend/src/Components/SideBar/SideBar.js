import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const SideBarNav = styled.nav`
  background: #15171c;
  height: 100vh;
  width: ${({ sideBar }) => (sideBar ? '250px' : '80px')};
  transition: width 0.3s;
  z-index: 10;
 
  
  @media (max-width: 768px) {
    width: ${({ sideBar }) => (sideBar ? '190px' : '0')};
  }
`;

const SideBarWrap = styled.div`
  width: 100%;
`;

const BackButton = styled.button`

`;

const SideBar = ({ caseNumber }) => {
    const [sideBar, setSideBar] = useState(true);

    const showSideBar = () => setSideBar(!sideBar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <SideBarNav sideBar={sideBar} className="sticky top-0 overflow-y-auto overflow-x-hidden min-h-screen">
                <SideBarWrap>
                    <div className="flex justify-between">

                    </div>
                    {SideBarData(caseNumber).map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SideBarWrap>
            </SideBarNav>
        </IconContext.Provider>
    );
};

export default SideBar;
