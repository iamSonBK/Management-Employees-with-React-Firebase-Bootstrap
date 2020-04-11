import React, { useState, useEffect } from "react";
import Header from "./component/header/header.component";
import Portfolio from "./page/portfolio/portfolio.component";
import Blog from "./page/blog/blog.component";
import BlogDetail from "./component/blog-detail/blog-detail.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/post/:id" component={BlogDetail} />
      </Switch>
    </div>
  );
};

export default App;
