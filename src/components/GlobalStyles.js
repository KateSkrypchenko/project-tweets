import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:  #5736a3;
  background-image: linear-gradient(114.99deg, #6731e1 -0.99%, #846abf 54.28%, #6f52b4 78.99%);
  color: #ebd8ff;
}

code {
  font-family: 'Montserrat', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h5,
p {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style:  none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
