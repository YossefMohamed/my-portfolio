import React from "react";
import styled from "styled-components";
import Nav from "./components/nav";
import "./App.css";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFount";
import Blog from "./pages/blog.jsx";

function App(props) {
  React.useEffect(() => {
    // console.log(props);
    window.scrollTo(0, 0);
  }, [props.match]);

  return (
    <Container>
       <BrowserRouter>
           <Nav />

        <Switch>
          
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} exact >

          </Route>
          <Route path="" component={NotFound} exact />

        </Switch>
      <Footer />
      </BrowserRouter>
 
  
    </Container>
  );
}

const Container = styled.div`
  padding: 0rem 9rem;
  @media (max-width: 868px) {
    padding: 0rem 1rem;
  }
`;
export default App;
