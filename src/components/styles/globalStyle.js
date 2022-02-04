import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(“https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Righteous&display=swap”);

body {
  background: #060447;
  color: #BF4124;
  font-family: “Montserrat”, sans-serif; 
  margin: 0 auto;
}
p {
    font-family: “Montserrat”, sans-serif;
    }
`;
export default GlobalStyle;
