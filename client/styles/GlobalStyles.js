import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`

height: 100%;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
}

li {
  list-style: none;
}

img {
vertical-align: top;
}

a {
text-decoration: none;
}

button {
  cursor: pointer;
}

button, input, textarea {
  border: none;
  background-color: transparent;
  outline: 0;
  font: inherit;  
}

select:focus {
      outline: none;
    }

html, body {
  width: 100%;
  height: 100%;
}

a {color: #000; text-decoration: none; outline: none}

 a:hover, a:active {text-decoration: none; color:#000;}


`;

export default GlobalStyles;
