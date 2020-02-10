import React from 'react';
import { observer } from "mobx-react";
import { StyledToolbar, Title, Container, SearchContainer, AvatarContainer, AvatarIcon, SearchIcon, MenuIcon, FullSizeContainer, BackIcon } from "./style";
import { Search } from '../Search';
import { icons } from '../../constants/icons';
import store from '../../store';
import { FSSearch } from '../FullSizeSearch';

const onMenuIconClick = () => {
    store.isToggled = !!!store.isToggled;
}

const onSearchIconClick = () => {
    store.isSearchToggled = !!!store.isSearchToggled;
}

export const Toolbar = observer(() => (
    <StyledToolbar>
        <Container isSearchToggled={store.isSearchToggled}>
            <MenuIcon icon={icons.menu} onClick={onMenuIconClick} />
            <Title>Settings</Title>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <AvatarContainer>
                <SearchIcon icon={icons.search} onClick={onSearchIconClick} />
                <AvatarIcon icon={icons.defaultAvatar} />
            </AvatarContainer>
        </Container>
        <FullSizeContainer isSearchToggled={store.isSearchToggled}>
            <FSSearch isSearchToggled={store.isSearchToggled} />
            <BackIcon icon={icons.close} isSearchToggled={store.isSearchToggled} onClick={() => store.isSearchToggled = false} />
        </FullSizeContainer>
    </StyledToolbar>
))