import React from 'react';
import { Avatar, Value, InformationsContainer, Sync, Button, Buttons, Flexy } from './style';
import store from '../../store';
import { icons } from '../../constants/icons';

export const CardProfile = () => (
    <Flexy>
        <Avatar icon={store.session.avatar} />
        <InformationsContainer>
            <Value>{store.session.username} <Sync icon={icons.sync} /></Value>
            <Value style={{ opacity: 0.4, fontSize: '18px' }}>{store.session.email}</Value>
        </InformationsContainer>
        <Buttons>
            <Button icon={icons.syncDisabled} />
            <Button>
                Sign out
            </Button>
        </Buttons>
    </Flexy>
)

