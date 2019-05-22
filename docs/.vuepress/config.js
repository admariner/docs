const path = require("path");
const webpack = require("webpack");

module.exports = {
  title: "Docs",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "Pipedream Documentation - Making any engineer a data engineer",
  base: "/",
  themeConfig: {
    logo: "/pipedream.svg",
    nav: [
      {
        text: "Support",
        link: "/support/"
      },
      {
        text: "Create a Pipeline",
        link: "https://tidewater.pipedream.com/"
      }
    ],
    sidebar: [
      "/support/",
      {
        title: "Intro to Pipedream",
        collapsable: false,
        children: ["/what-is-pipedream/", "/sign-up/", "/your-first-pipeline/"]
      },
      {
        title: "Notebooks",
        collapsable: false,
        children: [
          "/notebook/",
          "/notebook/sources/",
          "/notebook/inspector/",
          "/notebook/dollar-event/",
          "/notebook/code/",
          "/notebook/destinations/",
          "/notebook/text/",
          "/notebook/sql/"
        ]
      },
      "/pricing/",
      "/limits/"
    ],
    PIPEDREAM_BASE_URL: "https://tidewater.pipedream.com",
    PAYLOAD_SIZE_LIMIT: "100kb",
    INSPECTOR_EVENT_LIMIT: "100"
  },
  plugins: ["tabs"]
};
