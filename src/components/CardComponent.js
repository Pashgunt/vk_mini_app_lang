import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Avatar, Card, SimpleCell, Spacing, Title} from "@vkontakte/vkui";
import {Icon28ChecksOutline} from "@vkontakte/icons";
import eng from "../img/Flag_of_the_United_Kingdom.png";
import ger from "../img/1200px-Flag_of_Germany.png";
import esp from "../img/Bandera_de_España.png";

export default function CardComponent(props) {
    const [hideCheckbox, setHideCheckbox] = useState(false);

    let image = null;

    switch (props.title) {
        case "Английский":
            image = eng;
            break;
        case "Немецкий":
            image = ger;
            break;
        case "Испанский":
            image = esp;
            break;
    }

    return (
        <Card style={props.style} mode="outline">
            <SimpleCell
                onClick={() => setHideCheckbox(!hideCheckbox)}
                before={<Avatar src={image}/>}
                after={hideCheckbox && <Icon28ChecksOutline fill={"white"}/>}
            >
                <Title level="3" style={{color: '#FFF'}}>{props.title}</Title>
            </SimpleCell>
        </Card>
    );
}