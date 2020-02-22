import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="content__image">
      <img src="https://www.gravatar.com/avatar/1e7501caa538ab02fe56cadf5ae46451?s=500" />
    </div>
    <div className="content__description">
      <p>love building stuff.</p>
      <p>currently focused in outlining the tech
        ecosystem for banking as a service in <span className="font__accent">México.</span></p>
      <p>developer, <span className="font__accent">architect</span>,
        gamer, artist, <span className="font__accent">baker</span>, otaku.</p>
      <div>
        <a href="https://www.linkedin.com/in/torijacarlos/" target="_blank"><span class="mdi mdi-linkedin"></span></a>
        <a href="https://www.instagram.com/torijacarlos.stuff/" target="_blank"><span class="mdi mdi-instagram has-text-secondary"></span></a>
      </div>
      <p>
        values<span className="font__accent">:</span> balance, wisdom, and wonder.
      </p>
    </div>
  </Layout>
)

export default IndexPage
