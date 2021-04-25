import React from "react";
import { Header } from "../components/Header";
import { Tweet } from "../components/TweetStream"
import { Pagination } from "../components/Pagination"
import { Footer } from "../components/Footer"

const IndexPage = () => (
  <React.Fragment>
    <div className="pb-20"> <Header /> </div>
    <Tweet />
    <Pagination />
    <Footer />
  </React.Fragment>
);

export default IndexPage;
