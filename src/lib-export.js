import RandomText from "./components/Text";

const RandomLib = {
    install: (app, option) => {
        RandomText.isntall(app)
    }
}

export {
    // To import all components
    RandomLib,
    // To import only component we want
    RandomText
}