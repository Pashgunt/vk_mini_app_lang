import React from 'react';
import {Div, Header, Title} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default function HeaderComponent(props){
    return(
        <Header style={props.style}>
            <Title level="2"
                   style={props.style}>
                {props.title}
            </Title>
        </Header>
    );
}