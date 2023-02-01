import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {CardGrid, Group, Spacing} from "@vkontakte/vkui";
import TitleComponent from "./TitleComponent";
import {state} from "../redux/state";
import CardComponent from "./CardComponent";
import HeaderComponent from "./HeaderComponent";
import ButtonComponents from "./ButtonComponents";

export default function FirstPanelComponent(props) {
    const [hideButton, setHideButton] = useState(false);
    const [isCheckedLang, setIsCheckLang] = useState(false);

    return (
        <Group mode="plain" style={{background:"#5982fe", minHeight:"100vh"}}>
            <TitleComponent state={state.configs.firstPage.title}/>
            <CardGrid size="l" spaced="true">
                {
                    state.configs.studyLanguages.main.map((title, index) => {
                        return <CardComponent
                            showButtonFunc={setHideButton}
                            isShowButton={hideButton}
                            key={index}
                            style={state.configs.firstPage.cards.style}
                            title={title}
                        />
                    })
                }
            </CardGrid>
            <Spacing size={36}/>
            <CardGrid size="l" spaced="true">
                <HeaderComponent title={"Остальные языки"} style={{color: "white"}}/>
                <Spacing size={32}/>
                {
                    state.configs.studyLanguages.another.map((title, index) => {
                        return <CardComponent
                            showButtonFunc={setHideButton}
                            isShowButton={hideButton}
                            key={index}
                            style={state.configs.firstPage.cards.style}
                            title={title}
                        />
                    })
                }
            </CardGrid>
            <Spacing size={24}/>
            {hideButton && <ButtonComponents setView={props.setView} title={"Продолжить"} styeButtonGroup={
                {
                    width: "100%",
                    height: "50px"
                }
            } styleButton={{
                color: "#5982fe",
                background: "#FFF"
            }}/>}
        </Group>
    );
}