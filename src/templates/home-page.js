import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import { Icon, Divider } from 'semantic-ui-react'
import { HTMLContent } from '../components/Content';

export default class HomePageTemplate extends React.Component {
  renderSocial(social) {
    return social.map((icon) => (
      <a key={icon.social_url} href={icon.social_url}>
        <Icon circular inverted link name={icon.social_network} />
      </a>)
    );
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    const { name, profile_image: image, position, social } = frontmatter;

    return (
      <section className="section">
        <div className="container">
          <div className="content">

            <img className="profile-image" src={image} alt="ALT" />
            <h1 className="has-text-weight-bold is-size-3">{name}</h1>
            <h2 className="is-size-6 position">{position}</h2>
            <div className="social">
              {this.renderSocial(social)}
            </div>
            <Divider />
            <HTMLContent className="description" content={html} />
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
