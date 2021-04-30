import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-MediumItalic.eot');
        src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'),
            url('/fonts/Roboto-MediumItalic.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-MediumItalic.woff') format('woff'),
            url('/fonts/Roboto-MediumItalic.ttf') format('truetype');
        font-weight: 500;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Italic.eot');
        src: local('Roboto Italic'), local('Roboto-Italic'),
            url('/fonts/Roboto-Italic.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-Italic.woff') format('woff'),
            url('/fonts/Roboto-Italic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Bold.eot');
        src: local('Roboto Bold'), local('Roboto-Bold'),
            url('/fonts/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-Bold.woff') format('woff'),
            url('/fonts/Roboto-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Regular.eot');
        src: local('Roboto'), local('Roboto-Regular'),
            url('/fonts/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-Regular.woff') format('woff'),
            url('/fonts/Roboto-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Medium.eot');
        src: local('Roboto Medium'), local('Roboto-Medium'),
            url('/fonts/Roboto-Medium.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-Medium.woff') format('woff'),
            url('/fonts/Roboto-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-BoldItalic.eot');
        src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
            url('/fonts/Roboto-BoldItalic.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-BoldItalic.woff') format('woff'),
            url('/fonts/Roboto-BoldItalic.ttf') format('truetype');
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-ThinItalic.eot');
        src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'),
            url('/fonts/Roboto-ThinItalic.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-ThinItalic.woff') format('woff'),
            url('/fonts/Roboto-ThinItalic.ttf') format('truetype');
        font-weight: 100;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Black.eot');
        src: local('Roboto Black'), local('Roboto-Black'),
            url('/fonts/Roboto-Black.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-Black.woff') format('woff'),
            url('/fonts/Roboto-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Light.eot');
        src: local('Roboto Light'), local('Roboto-Light'),
            url('/fonts/Roboto-Light.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-Light.woff') format('woff'),
            url('/fonts/Roboto-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-LightItalic.eot');
        src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
            url('/fonts/Roboto-LightItalic.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-LightItalic.woff') format('woff'),
            url('/fonts/Roboto-LightItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-BlackItalic.eot');
        src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
            url('/fonts/Roboto-BlackItalic.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-BlackItalic.woff') format('woff'),
            url('/fonts/Roboto-BlackItalic.ttf') format('truetype');
        font-weight: 900;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Thin.eot');
        src: local('Roboto Thin'), local('Roboto-Thin'),
            url('/fonts/Roboto-Thin.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Roboto-Thin.woff') format('woff'),
            url('/fonts/Roboto-Thin.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    body {
        min-width: 320px;
        font-family: 'Roboto';

        &.modal-open {
            #__next {
                filter: blur(1px);
            }
        }
    }

    *::-webkit-scrollbar {
        width: 10px;
    }
    
    *::-webkit-scrollbar-track {
        background-color: #808080;
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: #c7c7c7;
    }
`;
