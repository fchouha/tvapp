/** @jsx jsx */
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, Grid } from "theme-ui"
import { alpha } from "@theme-ui/color"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = ({
  data: {
    allChannelsJson: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Channel List"
        meta={[
          {
            name: "keywords",
            content: `free tv, arab tv, live tv`,
          },
        ]}
      />
      <Grid columns={[2, 3, 4, 6]} gap={3} padding={4}>
        {edges.map(({ node: channel }) => (
          <Link
            key={channel.id}
            sx={{
              p: 3,
              borderStyle: "solid",
              borderWidth: "medium",
              borderColor: alpha("muted", 0.3),
              transition: "border-color 200ms",
              outline: "none",
              ":hover, :focus": {
                borderColor: "muted",
              },
            }}
            to={`/watch/${channel.id}/`}
          >
            <Img
              fluid={channel.logo.childImageSharp.fluid}
              alt={channel.name}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query {
    allChannelsJson {
      edges {
        node {
          id
          name
          logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
