import {Pages} from "./pages/Pages.jsx";
import {Category} from "./components/Category.jsx";
import {BrowserRouter, Link} from "react-router-dom";
import {Search} from "./components/Search.jsx";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import {useEffect} from "react";


function App() {
  return (
    <div>
        <BrowserRouter>
            <Nav>
                <GiKnifeFork />
                <Logo to={'/'} >deliciousss</Logo>
            </Nav>
            <Search />
            <Category />
            <Pages />
        </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
`

export default App;
