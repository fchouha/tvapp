exports.createPages = ({ actions: { createPage } }) => {
  const channels = require("./src/data/channels.json")
  channels.forEach(channel => {
    createPage({
      path: `/watch/${channel.id}/`,
      component: require.resolve("./src/components/Watch.js"),
      context: channel,
    })
  })
}
