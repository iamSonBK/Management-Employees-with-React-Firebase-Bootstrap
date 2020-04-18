import React, { useEffect } from "react";
import Header from "./component/header/header.component";
import Portfolio from "./page/portfolio/portfolio.component";
import Blog from "./page/blog/blog.component";
import BlogDetail from "./component/blog-detail/blog-detail.component";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "./redux/blog/blog.action";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const App = ({ fetchCollectionsStart, collections }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" render={() => <Blog />} />
        <Route exact path="/blog/post/:id/:userId" component={BlogDetail} />
      </Switch>
    </div>
  );
};
const mapStateToProps = ({ post: { collections } }) => ({
  collections,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
