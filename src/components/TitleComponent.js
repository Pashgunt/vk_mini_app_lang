import React from 'react';
import { Div,Title } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default function TitleComponent(props){
    return(
        <Div>
            <Title level="1" weight="1" style={props.state.style}>
                {props.state.titleText}
            </Title>
        </Div>
    );
}