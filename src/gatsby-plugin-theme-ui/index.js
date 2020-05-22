export default {
  breakpoints: ["576px", "768px", "1024px", "1280px"],
  colors: {
    text: "#fff",
    background: "#222",
    muted: "#888",
  },
  fonts: {
    body: "merriweather sans",
    heading: "merriweather sans",
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "48px",
    "64px",
    "72px",
  ],
  space: [
    "0px",
    "4px",
    "8px",
    "16px",
    "32px",
    "64px",
    "128px",
    "256px",
    "512px",
  ],
  borderWidths: {
    small: "1px",
    medium: "2px",
    large: "3px",
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
  },
  styles: {
    root: {
      backgroundColor: "background",
      boxSizing: "border-box",
      color: "text",
      fontFamily: "body",
      fontSize: 2,
      lineHeight: "body",
      m: 0,
      p: 0,
    },
    h1: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 0,
    },
  },
};
