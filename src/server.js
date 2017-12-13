import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import ejs from "ejs";

import AppContainer from "containers/AppContainer";
import template from "index.ejs";

module.exports = locals => {
  const html = renderToString(
    <StaticRouter location={locals.path}>
      <AppContainer />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  return ejs.render(
    template,
    {
      /* Add template data here */
      chunks: locals.chunks,
      helmet,
      html,
      icons: locals.icons
    },
    { rmWhitespace: true } // ejs options
  );
};
