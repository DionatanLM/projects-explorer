import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
       -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;

    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.8);
    }


::-webkit-scrollbar {
  width: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

}

`;
