import React from "react"
import DataCard from "../components/data-card"
import Experience from "../components/experience"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useAdditionalData from "../hooks/additional"
import useExperience from "../hooks/experience"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { useStaticQuery, graphql } from "gatsby"

const ResumePage = () => { 
  const cert = useStaticQuery(graphql`
    query cert {
      file(relativePath: { eq: "certs.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const experience = useExperience();
  const data = useAdditionalData();
  return (
    <Layout page="resume">
      <SEO title="resume" />
      <div className="resume">
        <div className="experience">
          {experience.map((value) => <Experience {...value} key={value.position + value.company} />)}
        </div>
        <div className="additional">
          <div>
            {data.map((value) => <DataCard {...value} key={value.title} />)}
          </div>
          <div className="additional__cert">
            <OutboundLink href="https://linkedin.com/in/torijacarlos/" target="_blank" rel="noopener noreferrer">
              <Img alt="aws certifications image" fluid={cert.file.childImageSharp.fluid}></Img>
            </OutboundLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage

