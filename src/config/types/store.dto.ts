import { Color } from "../contants";

interface IState {
    list: ITodo[];
    themes: ITheme[];
    themeStyle: THEME_STYLE;
    isLoading: boolean;
    wsData: {};
}

interface IThemeStyle {
    backgroundColor: Color;
    color: Color;
    text: string;
}

interface WsData {
    msg: string;
}

interface ITheme {
    id: number;
    name: string;
    style: THEME_STYLE
}

enum THEME_STYLE {
    DEFAULT = "DEFAULT",
    RED = "RED",
    GREEN = "GREEN",
    YELLOW = "YELLOW",
}

interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

enum TODO_STATUS {
    WILLDO = "willdo",
    FINISHED = "finished",
    DOING = "doing"
}

export {
    IState,
    IThemeStyle,
    WsData,
    ITodo,
    ITheme,
    THEME_STYLE,
    TODO_STATUS
}