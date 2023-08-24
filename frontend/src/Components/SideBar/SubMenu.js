import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SubNavContext } from '../../SubNavContext';

const SideBarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
padding: 20px;
list-style: none;

text-decoration: none;
font-size: 18px;




&:hover{
    background: #252831;
    border-left: 4px solid #485B99;
    cursor: pointer;
}
`;

const SideBarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #414757;

padding-left: 2rem;
padding-right: 1rem;
display: flex;
align-items: center;

text-decoration: none;
color: #f5f5f5;


&:hover {
    background: #632ce4;
    cursor: pointer;
}
`;

const IconWrapper = styled.div`
  /* Prevent the icon from shrinking */
  @apply flex-shrink-0;
`;

const SubMenu = ({ item }) => {
    const { subnav, toggleSubmenu } = useContext(SubNavContext); // Get subnav state from the SubNavContext

    const submenuId = `${item.title}`; // Create a unique ID for the submenu


    const showSubnav = () => {
        toggleSubmenu(submenuId); // Toggle the state of the specific submenu
    };

    const isSubmenuOpen = subnav[submenuId] || false;

    return (
        <div>
            {console.log('submenuID', submenuId)}
            <SideBarLink onClick={showSubnav} className="h-20 pb-4 lg:pb-0">
                <div className="flex items-start items-center text-sm font-light md:text-base lg:text-base ">
                    <IconWrapper> {item.icon}</IconWrapper>
                    <SideBarLabel className="text-start">{item.title}</SideBarLabel>
                </div>
                <div>
                    {item.subNav && isSubmenuOpen
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SideBarLink>
            {isSubmenuOpen &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink
                            // onClick={handleLinkClick}
                            className="items-center text-start text-sm font-light md:text-base lg:text-base h-16"
                            to={item.path}
                            key={index}>
                            {item.icon}
                            <SideBarLabel>{item.title}</SideBarLabel>
                        </DropdownLink>
                    );
                })}
        </div>
    );
}


export default SubMenu;