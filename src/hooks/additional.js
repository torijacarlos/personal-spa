import { useStaticQuery, graphql } from "gatsby"


export default () => {
  const { site } = useStaticQuery(graphql`
    query additional {
      site {
        siteMetadata {
          additional {
            title,
            values,
          }
        }
      }
    }
  `)
  return site.siteMetadata.additional
}