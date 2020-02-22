import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
import useExperience from "../hooks/experience"
import DataCard from "../components/data-card"
import useAdditionalData from "../hooks/additional"

const ResumePage = () => { 
  const experience = useExperience();
  const data = useAdditionalData();
  return (
    <Layout>
      <SEO title="resume" />
      <div className="resume">
        <div className="experience">
          {experience.map((value) => <Experience {...value} />)}
        </div>
        <div className="additional">
          {data.map((value) => <DataCard {...value} />)}
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage

