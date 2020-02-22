import { useStaticQuery, graphql } from "gatsby"


export default () => {
  const { site } = useStaticQuery(graphql`
    query experience {
      site {
        siteMetadata {
          experience {
            position,
            company,
            color,
            web,
            term,
            responsibility,
            tasks,
          }
        }
      }
    }
  `)
  return site.siteMetadata.experience
}