import React from 'react';
import { observer } from "mobx-react";
import { StyledSidebarItem, Icon, Name } from "./style";

interface Props {
    icon: any,
    text: any,
    selected: boolean,
    visible: boolean,
    isUser?: boolean
    key?: number
}

export const SidebarItem = observer(({ icon, text, selected, visible, isUser }: Props) => (
    <StyledSidebarItem visible={visible}>
        <Icon icon={icon} style={{ borderRadius: isUser ? '50px' : '0' }} />
        <Name>{text}</Name>
    </StyledSidebarItem>
))