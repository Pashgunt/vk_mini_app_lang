import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider, Panel, Root, View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {state} from "./redux/state";
import FirstPanelComponent from "./components/FirstPanelComponent";

const App = () => {

    const [activeView, setActiveView] = useState(state.activeView)

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <Root style={{background: "#5982fe"}} activeView={activeView}>
                        <View activePanel="firstPanel" id="firstPage" style={{background:"#5982fe"}}>
                            <Panel id="firstPanel" style={{background:"#5982fe"}}>
                                <FirstPanelComponent setView={setActiveView}/>
                            </Panel>
                        </View>
                    </Root>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
