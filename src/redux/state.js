export const state = {
    header: 'EnLang Study',
    configs: {
        firstPage: {
            title: {
                titleText: 'Выберите язык обучения',
                style: {
                    textAlign: "center",
                    color: "#FFF",
                    width: "50%",
                    margin: "3.5rem auto"
                }
            },
            cards: {
                style: {
                    background: "transparent",
                    padding: "3px",
                    color: "#FFF"
                }
            }
        },
        studyLanguages: {
            main: [
                "Английский",
                "Немецкий"
            ],
            another: [
                "Испанский"
            ]
        },
    },
    activeView: "firstPage",
}