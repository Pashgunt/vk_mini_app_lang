import React from 'react';
import {Title} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default function HeaderComponent(props) {
    return (
        <Title level="3"
               style={props.style}>
            {props.title}
        </Title>
    );
}