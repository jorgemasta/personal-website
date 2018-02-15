import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Script from "react-load-script";
import 'semantic-ui-css/semantic.min.css';

import Navbar from "../components/Navbar";
import "../assets/scss/all.scss";

class TemplateWrapper extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Developer | Jorge Marrero</title>
          <meta name="description" content="Website of the Developer Jorge Marrero. Currently living in Gran Canaria, Spain." />
          <link rel="icon" type="image/png" href="../img/developer-favicon.png" />
        </Helmet>
        {/* <Navbar /> */}
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div>{children()}</div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
