import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout page="home">
    <SEO title="home" />
    <div className="content__image">
      <img alt="torijacarlos photograph" src="https://www.gravatar.com/avatar/1e7501caa538ab02fe56cadf5ae46451?s=500" />
    </div>
    <div className="content__description">
      <p>love building stuff.</p>
      <p>currently focused in outlining the tech
        ecosystem for banking as a service in <span className="font__accent">México.</span></p>
      <p>developer, <span className="font__accent">architect</span>,
        gamer, artist, <span className="font__accent">baker</span>, otaku.</p>
      <p>
        values<span className="font__accent">:</span> balance, wisdom, and wonder.
      </p>
    </div>
  </Layout>
)

export default IndexPage
