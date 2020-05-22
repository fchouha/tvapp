/** @jsx jsx */
import { Link } from "gatsby";
import Img from "gatsby-image";
import { jsx, Grid, Styled } from "theme-ui";
import { alpha } from "@theme-ui/color";
import PropTypes from "prop-types";

const langs = [
  {
    code: "en",
    label: "English",
  },
  {
    code: "ar",
    label: "Arabic",
  },
];

const ChannelList = ({ channels }) => {
  return (
    <div sx={{ p: [3, 4] }}>
      {langs.map((lang) => (
        <section
          key={lang.code}
          sx={{
            mb: 5,
          }}
        >
          <Styled.h1>{lang.label}</Styled.h1>
          <Grid columns={[2, 3, 4, 7]} gap={3}>
            {channels
              .filter(({ node: channel }) => channel.language === lang.code)
              .map(({ node: channel }) => (
                <Link
                  key={channel.id}
                  sx={{
                    p: [2, 2, 2, 3],
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
        </section>
      ))}
    </div>
  );
};

export default ChannelList;

ChannelList.propTypes = {
  channels: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.object,
      })
    ),
  }),
};
