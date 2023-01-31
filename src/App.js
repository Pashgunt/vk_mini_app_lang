import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    AdaptivityProvider,
    AppRoot, CardGrid,
    ConfigProvider, Group, Panel, Spacing,
    SplitLayout, View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {state} from "./redux/state";
import TitleComponent from "./components/TitleComponent";
import CardComponent from "./components/CardComponent";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponents from "./components/ButtonComponents";

const App = () => {

    const [hideButton, setHideButton] = useState(false);
    const [isCheckedLang, setIsCheckLang] = useState(false);

    useEffect(() => {

    })

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout style={{background: "#5982fe"}}>
                        <View activePanel="activePanel">
                            <Panel id="activePanel">
                                <Group mode="plain">
                                    <TitleComponent state={state.configs.firstPage.title}/>
                                    <CardGrid size="l" spaced="true">
                                        {
                                            state.configs.studyLanguages.main.map((title, index) => {
                                                return <CardComponent
                                                    key={index}
                                                    style={state.configs.firstPage.cards.style}
                                                    title={title}
                                                />
                                            })
                                        }
                                    </CardGrid>
                                    <Spacing size={24}/>
                                    <Group mode="plain"
                                           header={
                                               <HeaderComponent title={"Остальные языки"} style={{color: "white"}
                                               }/>}>
                                        <Spacing size={12}/>
                                        {
                                            state.configs.studyLanguages.another.map((title, index) => {
                                                return <CardComponent
                                                    key={index}
                                                    style={state.configs.firstPage.cards.style}
                                                    title={title}
                                                />
                                            })
                                        }
                                    </Group>
                                    <Spacing size={24}/>
                                    {hideButton && <ButtonComponents title={"Продолжить"} styeButtonGroup={
                                        {
                                            width: "100%",
                                            height: "50px"
                                        }
                                    } styleButton={{
                                        color: "#5982fe",
                                        background: "#FFF"
                                    }}/>}
                                </Group>
                            </Panel>
                        </View>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
