import React, { useEffect } from "react";
// import Header from "./component/header/header.component";
// import Portfolio from "./page/portfolio/portfolio.component";
import Blog from "./page/blog/blog.component";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "./redux/blog/blog.action";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const App = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/blog" render={() => <Blog />} />
      </Switch>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(App);
