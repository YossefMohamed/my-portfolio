import React from "react";
import styled from "styled-components";
import Nav from "./components/nav";
import "./App.css";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFount";
import Blog from "./pages/blog.jsx";

import ScrollTop from "./util/scroll";
import PostPage from "./pages/post";
import colors from "./util/colors";

function App(props) {
  return (
    <Container>
      <BrowserRouter>
        <ScrollTop />
        <Nav />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/post/:id" component={PostPage} exact />
          <Route path="/blog/:tag" component={Blog} exact></Route>
          <Route path="/blog" component={Blog} exact></Route>
          <Route path="" component={NotFound} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  padding: 0rem 7rem;
  display: relative;
  width: 100%;
  background-color: ${colors.light};
  @media (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;
export default App;
