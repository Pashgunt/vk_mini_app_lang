import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Button, ButtonGroup, Title} from "@vkontakte/vkui";

export default function ButtonComponents(props) {
    return (
        <ButtonGroup mode="vertical" align="center" gap="space" style={props.styeButtonGroup}>
            <Button size="l" stretched="true" align="center" style={props.styleButton}>
                <Title level="3">
                    {props.title}
                </Title>
            </Button>
        </ButtonGroup>
    );
}