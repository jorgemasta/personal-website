import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

export default class HomePageTemplate extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    console.log(frontmatter);
    const { name, profile_image: image, position } = frontmatter;

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{name}</h1>
            <h2>{position}</h2>
            <img style={{ borderRadius: "5px" }} src={image} alt="ALT" />
          </div>
        </div>
      </section>
    );
  }
}

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        profile_image
        name
        position
        social {
          social_network
          social_url
        }
      }
    }
  }
`;
