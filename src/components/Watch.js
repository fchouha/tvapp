/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import SEO from "./Seo";

const Watch = ({ pageContext: { name, embedUrl } }) => (
  <React.Fragment>
    <SEO
      title={name}
      meta={[
        {
          name: "keywords",
          content: `free tv, livestream tv, ${name}`,
        },
      ]}
    />
    <iframe
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        border: 0,
      }}
      title={name}
      src={`${embedUrl}&autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </React.Fragment>
);

export default Watch;
