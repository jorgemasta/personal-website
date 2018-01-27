import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Script from "react-load-script";

import Navbar from "../components/Navbar";
import "./all.sass";

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
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <Navbar />
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
