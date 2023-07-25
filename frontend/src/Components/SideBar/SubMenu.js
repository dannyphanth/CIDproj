import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    border-left: 4px solid #632ce4;
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

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <div>
            <SideBarLink onClick={showSubnav} className="h-20 pb-4 lg:pb-0">
                <div className="flex items-start items-center text-sm md:text-base lg:text-base ">
                    <IconWrapper> {item.icon}</IconWrapper>
                    <SideBarLabel className="text-start">{item.title}</SideBarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SideBarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink className="items-center text-start text-sm md:text-base lg:text-base h-16" to={item.path} key={index}>
                            {item.icon}
                            <SideBarLabel>{item.title}</SideBarLabel>
                        </DropdownLink>
                    );
                })}
        </div>
    );
};

export default SubMenu;