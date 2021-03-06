import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontSize: {
            welcome: number;
            extraLarge: number;
            large: number;
            medium: number;
            small: number;
            extraSmall: number;
        };
        spacer: number;
        sliderHeight: number;
        separator: {
            borderWidth: number;
            borderColor: string;
        };
        tabBarHeight: number;
        widgetHeight: number;
        coverHeight: number;
        coverWidth: number;
        statusBar: number;
        playButtonSize: number;
        fontFamily: {
            regular: string;
            medium: string;
            bold: string;
            extraBold: string;
            black: string;
        };
        logoFont: string;
        fontWeight: {
            bold: number;
            standard: number;
            normal: number;
            thin: number;
        };
        borderRadius: {
            large: number;
            medium: number;
            small: number;
        };
        colors: {
            main: string;
            secondary: string;
            additivePink: string;
            additiveBlue: string;
            screenBackground: string;
            sliderColor: string;
            inputBackground: string;
            contrast: string;
        };
        player: {
            artworkSize: number;
            artworkMarginTop: number;
            headerHeight: number;
            marginHorizontal: number;
            marginVertical: number;
            playerControlHeight: number;
            controlPlayPauseSize: number;
            controlPrevNextSize: number;
        };
        widget: {
            iconSize: number;
            progressHeight: number;
        };
        searchItem: {
            height: number;
            searchImage: number;
        };
    }
}
