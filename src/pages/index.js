/** @jsx jsx */
import { graphql } from "gatsby";
import { jsx } from "theme-ui";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ChannelList from "../components/ChannelList";

const title = "Channel List";
const keywords = "free tv, livestream tv, live tv";

const IndexPage = ({
  data: {
    allChannelsJson: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO
        title={title}
        meta={[
          {
            name: "keywords",
            content: keywords,
          },
        ]}
      />
      <ChannelList channels={edges} />
    </Layout>
  );
};

export default IndexPage;

export const data = graphql`
  query {
    allChannelsJson {
      edges {
        node {
          id
          name
          language
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
`;
