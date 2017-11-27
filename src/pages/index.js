/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import Introduction from '../components/intro'

const IndexPage = props => (
  <main>
    <Introduction />
    <Features data={props.data.allDataJson.edges[0].node.projects} />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} />
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          projects {
            title
            description
            android
            ios
            web
            repository
            image
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
