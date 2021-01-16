import { Color } from "../contants";
import { ITheme, THEME_STYLE } from "./theme";
import { ITodo } from "./todolist";

interface IState {
    list: ITodo[];
    themes: ITheme[];
    themeStyle: THEME_STYLE;
    isLoading: boolean;
}

interface IThemeStyle {
    backgroundColor: Color;
    color: Color;
    text: string;
}

export {
    IState,
    IThemeStyle
}