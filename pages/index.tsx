import React from "react";
import { Header } from "../components/Header";
import { Tweet } from "../components/TweetStream"
import { Pagination } from "../components/Pagination"
import { Footer } from "../components/Footer"

const IndexPage = () => (
  <React.Fragment>
    <Header /> 
    <Tweet />
    <Pagination />
    <Footer />
  </React.Fragment>
);

export default IndexPage;
