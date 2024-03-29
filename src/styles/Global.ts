import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // tamanho padrão da font 16px
    html {
        // tamanho maximo da tela
        @media (max-width: 1080px) {
            // reduz a font para 15px (caso o padrão seja 16)
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
             // reduz a font para 14px (caso o padrão seja 16)
            font-size: 87.5%;
        }
    }

    body {
        background: ${props => props.theme.colors.background};
        -webkit-font-smoothing: antialiased; // para as fontes ficarem mais nitidas
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    // tudo que estiver desabilitado 
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: ${props => props.theme.colors.background};
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    



`