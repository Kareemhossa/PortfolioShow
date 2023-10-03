import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}
  body {
    background-color: #1b1b1b;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    border-radius: 8px;
    background: transparent;
    color: white;
    font-family: "Inter", sans-serif;
    transition: all 0.4s ease;
    &:hover {
      background: #23d997;
      color: white;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  a {
    font-size: 1.3rem;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  p {
    padding: 3rem 1rem 3rem 0rem;
    color: #ccc;
    font-size: 1.5rem;
    line-height: 150%;
  }
`;

export default GlobalStyle;
