import { IState, THEME_STYLE } from "@/config/types/store.dto";

export default <IState> {
    list: [],
    themes: [],
    themeStyle: THEME_STYLE.DEFAULT,
    isLoading: false,
    wsData: {}
}
