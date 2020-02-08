import React from 'react';
import { observer } from "mobx-react";
import { StyledSidebar, Indicator } from "./style";
import { categories } from '../../constants/categories';
import { SidebarItem } from '../SidebarItem';
import store from '../../store';

export const Sidebar = observer(() => (
    <StyledSidebar>
        <Indicator position={store.indicatorPosition} />
        <SidebarItem text={store.session.username} icon={store.session.avatar} visible={true} selected={true} isUser />
        {categories.map((item, key) => (
            <SidebarItem text={item.name} icon={item.icon} visible={true} key={Math.random()*1000} selected={false} />
        ))}
    </StyledSidebar>
))